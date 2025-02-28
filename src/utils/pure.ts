import type { CronDateType, SLSType } from '../types';
import * as crypto from 'crypto';
import { DAILY_RUN_TIME, MS2HOUR } from '../constant';
import { isArray, isObject } from './is';

const MAX_MINUTES = 59,
  MAX_HOURS = 23,
  DAILY_MIN_HOURS = 19;

/**
 * 返回本月天数
 */
export function getMonthHasDays(now?: Date) {
  const nowTime = now || getPRCDate(),
    year = nowTime.getFullYear(),
    month = nowTime.getMonth() + 1,
    smallMonth = [4, 6, 9, 11];

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (month === 2) {
    return isLeapYear ? 29 : 28;
  } else if (smallMonth.includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

/**
 * 生成一个 UUID
 */
export function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, t => {
    const e = crypto.randomBytes(1)[0] % 16;
    return (t === 'x' ? e : (3 & e) | 8).toString(16);
  });
}

/**
 * 不同时区获取北京时间
 */
export function getPRCDate(): Date {
  const now = new Date(),
    nowTime = now.getTime(),
    timezone = now.getTimezoneOffset() / 60;
  // 3600000 为每小时毫秒数
  return new Date(nowTime + (timezone + 8) * MS2HOUR);
}

/**
 * 获取当前日期（自动补齐两位）
 */
export function getDateString(now?: Date) {
  const nowTime = now || getPRCDate();
  const year = nowTime.getFullYear(),
    month = nowTime.getMonth() + 1,
    day = nowTime.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

/**
 * 将 JSONP 返回的数据转换为对象
 */
export function jsonp2Object(jsonp: string) {
  const jsonpData = jsonp.replace(/^\w+\(/, '').replace(/\)$/, '');
  return JSON.parse(jsonpData);
}

/**
 * 一页有 n 条数据，第 m 个数据在第几页
 * @param n 每页数据条数
 * @param m 第几条数据
 */
export function getPageNum(n: number, m: number) {
  return Math.ceil(m / n);
}

/**
 * 设置 cron 表达式
 * @param time 时间戳
 */
export function setCron(time = 60_000, slsType?: SLSType) {
  time = time || 60_000;
  const pre = getPRCDate().getTime() + time;
  const next = new Date(pre);
  const seconds = next.getSeconds(),
    minutes = next.getMinutes(),
    hours = next.getHours();
  return formatCron({ hours, minutes, seconds }, slsType);
}

/**
 * 生成随机数
 * @description 生成一个随机数，范围在 min 和 max 之间（包括 min 和 max）
 * @param lower
 * @param upper
 * @param floating
 */
export function random(lower?: number, upper?: number, floating?: boolean) {
  if (floating && typeof floating !== 'boolean') {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper === 'boolean') {
      floating = upper;
      upper = undefined;
    } else if (typeof lower === 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  } else if (upper === undefined) {
    upper = lower;
    lower = 0;
  }
  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random();
    return Math.min(
      lower + rand * (upper - lower + parseFloat('1e-' + ((rand + '').length - 1))),
      upper,
    );
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * 每日任务随机时间设置
 * @param dailyRunTime 每日任务执行时间
 */
export function randomDailyRunTime(dailyRunTime = DAILY_RUN_TIME, slsType?: SLSType) {
  const taskTime = dailyRunTime.split('-');
  const startTime = taskTime[0].split(':').map(str => +str);
  const endTime = taskTime[1].split(':').map(str => +str);

  const hours = random(startTime[0] ?? DAILY_MIN_HOURS, endTime[0] ?? MAX_HOURS);
  let minutes = 0;
  if (hours == startTime[0]) {
    minutes = random(startTime[1], MAX_MINUTES);
  } else if (hours == endTime[0]) {
    minutes = random(endTime[1]);
  } else {
    minutes = random(MAX_MINUTES);
  }
  let seconds = 0;
  if (hours == startTime[0]) {
    seconds = random(startTime[2], MAX_MINUTES);
  } else if (hours == endTime[0]) {
    seconds = random(endTime[2]);
  } else {
    seconds = random(MAX_MINUTES);
  }

  return formatCron({ seconds, hours, minutes }, slsType);
}

/**
 * 格式化 cron 表达式
 * @param Date
 * @param type
 */
export function formatCron({ hours, minutes, seconds }: CronDateType, type?: SLSType) {
  seconds = seconds || 0;
  let value: string;
  switch (type) {
    case 'scf':
      value = `${seconds} ${minutes} ${hours} * * * *`;
      break;
    case 'fc':
      value = `${seconds} ${minutes} ${hours} * * *`;
      break;
    case 'cfc':
      value = `corn(${minutes} ${hours} * * *)`;
      break;
    default:
      value = `${seconds} ${minutes} ${hours} * * * *`;
  }
  return {
    value,
    string: `${hours}:${minutes}:${seconds}`,
  };
}

/**
 * 随机字符串
 * @param length
 * @param lower
 */
export function randomString(length: number, lower?: boolean) {
  const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += getRandomItem(chars);
  }
  if (lower) {
    return result.toLowerCase();
  }
  return result;
}

/**
 * 获取 visitorId
 * @description 获取 visitorId，部分请求需要
 */
export function getVisitId() {
  // 1 ~ 9
  const randomNum = random(1, 9);
  // 10 位随机数字字母字符串
  const randomStr = randomString(10, true);
  return `${randomNum}${randomStr}0`;
}

/**
 * 不存在于数组就添加它
 * @param array
 * @param item
 */
export function pushIfNotExist<T = unknown>(array: T[], item: T) {
  if (!array.includes(item)) {
    array.push(item);
  }
}

/**
 * 生成新对象，即使原对象是 undefined，获取属性也不会报错
 * @param object 值
 */
export function getNewObject<T = unknown>(object: T): T {
  return object || ({} as T);
}

/**
 * 克隆对象
 * @param object
 * @param deep
 */
export function cloneObject<T = unknown>(object: T, deep = false): T {
  if (!isObject(object)) {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map(item => cloneObject(item, deep)) as unknown as T;
  }
  if (deep) {
    return Object.keys(object).reduce((result, key) => {
      result[key] = cloneObject(object[key], deep);
      return result;
    }, {} as T);
  }
  return Object.assign({}, object);
}

/**
 * 深度合并对象
 * @param target
 * @param source
 */
export function deepMergeObject<T = unknown>(target: T, source: any): T {
  // 忽略 undefined
  if (target === undefined || source === undefined) {
    return (target || source) as T;
  }
  if (!isObject(target) || !isObject(source)) {
    return source as T;
  }
  if (Array.isArray(target) && Array.isArray(source)) {
    return target.concat(source) as unknown as T;
  }
  return Object.keys(source).reduce((result, key) => {
    result[key] = deepMergeObject(target[key], source[key]);
    return result;
  }, target);
}

/**
 *  stringify
 * @param entries
 */
export function stringify(entries: Record<string, any> | [string, any][]): string {
  if (!isObject(entries) && !isArray(entries)) {
    return entries;
  }
  const searchParams = new URLSearchParams();
  if (!Array.isArray(entries)) {
    entries = Object.entries(entries);
  }
  entries.forEach(([key, value]) => {
    if (isObject(value)) {
      searchParams.append(key, JSON.stringify(value));
      return;
    }
    searchParams.append(key, String(value));
  });
  return searchParams.toString();
}

/**
 * 获取数组或者字符串中的随机一个
 * @param indexable
 */
export function getRandomItem<T extends Array<any> | string>(
  indexable: T,
): T extends Array<infer U> ? U : string {
  return indexable[random(indexable.length - 1)];
}

/**
 * md5 hash
 * @param str
 * @param uppercase
 */
export function md5(str: string, uppercase = false) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return uppercase ? hash.digest('hex').toUpperCase() : hash.digest('hex');
}

/**
 * 合并 Header
 * @description 合并 Header，如果有相同的 key，则后面的覆盖前面的，自动处理 key 大小写
 * @param headers
 * @param headersToMerge
 */
export function mergeHeaders(
  headers: Record<string, any> = {},
  headersToMerge: Record<string, any> = {},
) {
  function toLowerCase(object: Record<string, any>) {
    return Object.keys(object).reduce((result, key) => {
      result[key.toLowerCase()] = object[key];
      return result;
    }, {});
  }
  return Object.assign({}, toLowerCase(headers), toLowerCase(headersToMerge));
}

/**
 * 字符串数组转数字数组
 * @param strArr 字符串数组
 */
export function arr2numArr(strArr: string[] | number[]) {
  return strArr && strArr.map((str: any) => Number(str)).filter(num => num > 0 && num % 1 === 0);
}

/**
 * base64 编码
 * @param str
 */
export function base64Encode(str: string) {
  return Buffer.from(str).toString('base64');
}

/**
 * 今天是否在预设的时间数组中
 * @param timeArr 时间数组（为空则判断为在）
 */
export function isTodayInTimeArr(timeArr: number[]) {
  if (!timeArr || !timeArr.length) {
    return true;
  }
  const today = new Date().getDate();
  return timeArr.includes(today);
}

/**
 * 获取 unix 时间戳
 */
export function getUnixTime() {
  return Math.floor(new Date().getTime() / 1000);
}
