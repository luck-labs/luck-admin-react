/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

/** 短链列表 POST /v1/api/admin/url/get */
// type Url struct {
//   Id          uint64 `gorm:"column:id" json:"id"`                     //ID
//   UserId      uint64 `gorm:"column:user_id" json:"user_id"`           //用户ID
//   HashKey     string `gorm:"column:hash_key" json:"hash_key"`         //哈希后缀
//   ShortUrl    string `gorm:"column:short_url" json:"short_url"`       //短链接
//   OriginalUrl string `gorm:"column:original_url" json:"original_url"` //原链接
//   Salt        string `gorm:"column:salt" json:"salt"`                 //加密盐
//   Status      int8   `gorm:"column:status" json:"status"`             //链接状态
//   CreateTime  int64  `gorm:"column:create_time" json:"create_time"`   //创建时间
//   UpdateTime  int64  `gorm:"column:update_time" json:"update_time"`   //更新时间
//  }
export async function queryShortUrlList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    current?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_UserInfo__>('/v1/api/admin/url/get', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改页面 schema
 * https://admin.luckmarket.cn
 */
export async function createPage(
  body?: API.PageInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/v1/api/admin/page/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 获取页面 schema */
export async function getPage(
  body?: API.PageInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_UserInfo_>('/v1/api/admin/page/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/user/${param0} */
export async function getUserDetail(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/user/${param0} */
export async function modifyUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  body?: API.UserInfoVO,
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_UserInfo_>(`/api/v1/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/v1/user/${param0} */
export async function deleteUser(
  params: {
    // path
    /** userId */
    userId?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<API.Result_string_>(`/api/v1/user/${param0}`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}
