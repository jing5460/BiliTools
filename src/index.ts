import { _log, warpLog } from './utils/log';
import { JuryTask, TaskModule } from './config/globalVar';
import { apiDelay, random, sendMessage } from './utils';
import bili, { doOneJuryVote, loginTask } from './service';
import { offFunctions } from './config/configOffFun';

exports.main_handler = async (event, _context) => {
  //必须得写在main_handler中,否则serverless无效
  console.log = warpLog();

  const biliArr = offFunctions([...Object.values(bili)]);

  /**  
    {
     "Type":"timer",
     "TriggerName":"EveryDay",
     "Time":"2019-02-21T11:49:00Z",
     "Message":"您输入的附加信息"
   }
   **/

  // 只有serverless才有event
  if (event === undefined) event = {};
  if (event.TriggerName === 'jury-timer') {
    if (!JuryTask.isRun && JuryTask.noRunMessage === '今日的案件已经审核完成') {
      console.log(JuryTask.noRunMessage, JuryTask.dailyCompleteCount++);
      return '跳过执行';
    }

    try {
      // apiDelay(random(60000));
      // await doOneJuryVote(random(30000, 60000));
      while (JuryTask.noRunMessage !== '今日的案件已经审核完成') {
        await apiDelay();
        await doOneJuryVote(random(12000, 30000));
      }
    } catch (error) {
      console.log(error);
    }

    if (JuryTask.dailyCompleteCount === 1 && JuryTask.caseNum > 0) {
      sendMessage('bili风纪任务完成', TaskModule.appInfo);
    }
    return '评审任务';
  }

  try {
    await loginTask();
  } catch (error) {
    console.log('登录失败: ', error);
    sendMessage('bili每日任务失败', TaskModule.appInfo);
    return '未完成';
  }
  for (const asyncfun of biliArr) {
    await asyncfun();
    await apiDelay();
  }

  sendMessage('bili每日任务完成', TaskModule.appInfo);
  return '完成';
};
