import axios from '../utils/request';
import qs from 'qs';
window.api = {};
window.api.base = 'http://172.16.42.54:10000';

export default {
  /**
   * 期刊-添加|更新
   * @method
   * @name addOrUpdateJournal
   */
  addOrUpdateJournal: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-获取分页
   * @method
   * @name getJournalPage
   */
  getJournalPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-获取列表，用于上拉加载更多
   * @method
   * @name getJournalList
   */
  getJournalList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-导入
   * @method
   * @name importJournal
   */
  importJournal: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-导出
   * @method
   * @name exportJournal
   */
  exportJournal: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-通过Ids批量查询
   * @method
   * @name getJournalByIds
   */
  getJournalByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-通过Id查询
   * @method
   * @name getJournal
   */
  getJournal: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 期刊-通过Id删除，支持批量删除
   * @method
   * @name deleteJournal
   */
  deleteJournal: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/journal/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统通告-通过Id查询
   * @method
   * @name getSysAnnouncement
   */
  getSysAnnouncement: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统通告-通过Id删除
   * @method
   * @name deleteSysAnnouncement
   */
  deleteSysAnnouncement: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统通告-获取列表，用于上拉加载更多
   * @method
   * @name getSysAnnouncementList
   */
  getSysAnnouncementList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统通告-添加|更新
   * @method
   * @name addOrUpdateSysAnnouncement
   */
  addOrUpdateSysAnnouncement: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统通告-获取分页
   * @method
   * @name getSysAnnouncementPage
   */
  getSysAnnouncementPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 发送指定消息到前台(测试websocket通讯)
   * @method
   * @name testSend
   */
  testSend: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnouncement/send/one/{userId}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{userId}", params["userId"])

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务是否活跃
   * @method
   * @name isActive
   */
  isActive: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/active"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-添加|更新
   * @method
   * @name addOrUpdateInfoType
   */
  addOrUpdateInfoType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-通过Ids批量查询
   * @method
   * @name getInfoTypeByIds
   */
  getInfoTypeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-通过Id查询
   * @method
   * @name getInfoType
   */
  getInfoType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-导出
   * @method
   * @name exportInfoType
   */
  exportInfoType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-导入
   * @method
   * @name importInfoType
   */
  importInfoType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-获取分页
   * @method
   * @name getInfoTypePage
   */
  getInfoTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-通过Id删除，支持批量删除
   * @method
   * @name deleteInfoType
   */
  deleteInfoType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级类型-获取列表，用于上拉加载更多
   * @method
   * @name getInfoTypeList
   */
  getInfoTypeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 资讯二级分类菜单树******************
   * @method
   * @name getInfoTypeTree
   */
  getInfoTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/infoType/getInfoTypeTree"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取用户的所有角色
   * @method
   * @name getUserRoles
   */
  getUserRoles: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/roles"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["userId"] !== undefined) {
      queryParameters["userId"] = params["userId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加用户角色关系
   * @method
   * @name addUserRole
   */
  addUserRole: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/roles"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["userId"] !== undefined) {
      form["userId"] = params["userId"]
    }

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    if (params["roleId"] !== undefined) {
      form["roleId"] = params["roleId"]
    }

    if (params["roleId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: roleId"))
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除用户角色关系
   * @method
   * @name deleteAuthUserRole
   */
  deleteAuthUserRole: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/roles"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["userId"] !== undefined) {
      queryParameters["userId"] = params["userId"]
    }

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    if (params["roleId"] !== undefined) {
      queryParameters["roleId"] = params["roleId"]
    }

    if (params["roleId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: roleId"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取管理员
   * @method
   * @name getAuthUsers
   */
  getAuthUsers: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加管理员
   * @method
   * @name addAuthUser
   */
  addAuthUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["username"] !== undefined) {
      queryParameters["username"] = params["username"]
    }

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    if (params["password"] !== undefined) {
      queryParameters["password"] = params["password"]
    }

    if (params["password"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: password"))
    }

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["name"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: name"))
    }

    if (params["mobile"] !== undefined) {
      queryParameters["mobile"] = params["mobile"]
    }

    if (params["mobile"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: mobile"))
    }

    if (params["userRole"] !== undefined) {
      queryParameters["userRole"] = params["userRole"]
    }

    if (params["userRole"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userRole"))
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新管理员
   * @method
   * @name updateAuthUser
   */
  updateAuthUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["userId"] !== undefined) {
      queryParameters["userId"] = params["userId"]
    }

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["name"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: name"))
    }

    if (params["mobile"] !== undefined) {
      queryParameters["mobile"] = params["mobile"]
    }

    if (params["mobile"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: mobile"))
    }

    if (params["userRole"] !== undefined) {
      queryParameters["userRole"] = params["userRole"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除管理员（只能删除自己创建的）
   * @method
   * @name deleteUser
   */
  deleteUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["userId"] !== undefined) {
      queryParameters["userId"] = params["userId"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取自己所有的权限
   * @method
   * @name getAuthUserPermissions
   */
  getAuthUserPermissions: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/permissions"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["menuSys"] !== undefined) {
      queryParameters["menuSys"] = params["menuSys"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 修改密码
   * @method
   * @name updateAuthUserPassword
   */
  updateAuthUserPassword: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/updatePassword"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["oldPassword"] !== undefined) {
      form["oldPassword"] = params["oldPassword"]
    }

    if (params["newPassword"] !== undefined) {
      form["newPassword"] = params["newPassword"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 重置自己创建的管理员密码
   * @method
   * @name resetAuthUserPassword
   */
  resetAuthUserPassword: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/resetPassword"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["userId"] !== undefined) {
      form["userId"] = params["userId"]
    }

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    if (params["password"] !== undefined) {
      form["password"] = params["password"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 修改用户可用状态
   * @method
   * @name updateAuthUserState
   */
  updateAuthUserState: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/state"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["userId"] !== undefined) {
      form["userId"] = params["userId"]
    }

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    if (params["state"] !== undefined) {
      form["state"] = params["state"]
    }

    if (params["state"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: state"))
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取管理员个人信息
   * @method
   * @name getAuthUser
   */
  getAuthUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/ownInfo"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过idList批量查询用户
   * @method
   * @name getUserByIds
   */
  getUserByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取用户组合的菜单按钮树
   * @method
   * @name getAuthUserMenus
   */
  getAuthUserMenus: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/menus"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["menuSys"] !== undefined) {
      queryParameters["menuSys"] = params["menuSys"]
    }

    if (params["parentMenuId"] !== undefined) {
      queryParameters["parentMenuId"] = params["parentMenuId"]
    }

    if (params["hasButton"] !== undefined) {
      queryParameters["hasButton"] = params["hasButton"]
    }

    if (params["hasChildren"] !== undefined) {
      queryParameters["hasChildren"] = params["hasChildren"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取用户-分页
   * @method
   * @name getAuthUserPage
   */
  getAuthUserPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取一个用户的信息
   * @method
   * @name getOneUserInfo
   */
  getOneUserInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/users/{userId}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{userId}", params["userId"])

    if (params["userId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: userId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-获取列表，用于上拉加载更多
   * @method
   * @name getMyScoreList
   */
  getMyScoreList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-通过Id删除，支持批量删除
   * @method
   * @name deleteMyScore
   */
  deleteMyScore: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-导入
   * @method
   * @name importMyScore
   */
  importMyScore: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-导出
   * @method
   * @name exportMyScore
   */
  exportMyScore: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-获取分页
   * @method
   * @name getMyScorePage
   */
  getMyScorePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-通过Id查询
   * @method
   * @name getMyScore
   */
  getMyScore: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-通过Ids批量查询
   * @method
   * @name getMyScoreByIds
   */
  getMyScoreByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的积分-添加|更新
   * @method
   * @name addOrUpdateMyScore
   */
  addOrUpdateMyScore: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myScore"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-通过Ids批量查询
   * @method
   * @name getForumLabelByIds
   */
  getForumLabelByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-获取列表，用于上拉加载更多
   * @method
   * @name getForumLabelList
   */
  getForumLabelList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-获取分页
   * @method
   * @name getForumLabelPage
   */
  getForumLabelPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-添加|更新
   * @method
   * @name addOrUpdateForumLabel
   */
  addOrUpdateForumLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-导入
   * @method
   * @name importForumLabel
   */
  importForumLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-通过Id查询
   * @method
   * @name getForumLabel
   */
  getForumLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-通过Id删除，支持批量删除
   * @method
   * @name deleteForumLabel
   */
  deleteForumLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛标签-导出
   * @method
   * @name exportForumLabel
   */
  exportForumLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumLabel/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统测试-通过Id查询
   * @method
   * @name getSysTest
   */
  getSysTest: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysTest/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统测试-通过Id删除
   * @method
   * @name deleteSysTest
   */
  deleteSysTest: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysTest/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统测试-添加|更新
   * @method
   * @name addOrUpdateSysTest
   */
  addOrUpdateSysTest: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysTest"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统测试-获取分页
   * @method
   * @name getSysTestPage
   */
  getSysTestPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysTest/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 系统测试-获取列表，用于上拉加载更多
   * @method
   * @name getSysTestList
   */
  getSysTestList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysTest/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-通过Id查询
   * @method
   * @name getReply
   */
  getReply: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-导入
   * @method
   * @name importReply
   */
  importReply: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-导出
   * @method
   * @name exportReply
   */
  exportReply: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-通过Ids批量查询
   * @method
   * @name getReplyByIds
   */
  getReplyByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-获取分页
   * @method
   * @name getReplyPage
   */
  getReplyPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-通过Id删除，支持批量删除
   * @method
   * @name deleteReply
   */
  deleteReply: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-获取列表，用于上拉加载更多
   * @method
   * @name getReplyList
   */
  getReplyList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 意见反馈-添加|更新
   * @method
   * @name addOrUpdateReply
   */
  addOrUpdateReply: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/reply"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取该用户创建的角色-列表
   * @method
   * @name getRoles
   */
  getRoles: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["userId"] !== undefined) {
      queryParameters["userId"] = params["userId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加（更新）角色
   * @method
   * @name addOrUpdateRole
   */
  addOrUpdateRole: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取角色-分页
   * @method
   * @name getRolesPage
   */
  getRolesPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取所有角色-分页
   * @method
   * @name getAllRolesPage
   */
  getAllRolesPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/getAllRolesPage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取用户能分配的角色-列表
   * @method
   * @name getAssignRoles
   */
  getAssignRoles: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/assignRoles"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取所有角色-列表
   * @method
   * @name getAllRoles
   */
  getAllRoles: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/getAllRoles"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取拥有该角色的所有用户
   * @method
   * @name getRoleUsers
   */
  getRoleUsers: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/{roleId}/users"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{roleId}", params["roleId"])

    if (params["roleId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: roleId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 判断角色编码是否可用
   * @method
   * @name judgeRoleNum
   */
  judgeRoleNum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/judgeRoleNum"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["roleId"] !== undefined) {
      queryParameters["roleId"] = params["roleId"]
    }

    if (params["roleNum"] !== undefined) {
      queryParameters["roleNum"] = params["roleNum"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 判断角色名称是否可用
   * @method
   * @name judgeRoleName
   */
  judgeRoleName: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/judgeRoleName"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["roleId"] !== undefined) {
      queryParameters["roleId"] = params["roleId"]
    }

    if (params["roleName"] !== undefined) {
      queryParameters["roleName"] = params["roleName"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除角色
   * @method
   * @name deleteRole
   */
  deleteRole: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/roles/{roleId}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{roleId}", params["roleId"])

    if (params["roleId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: roleId"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 高级分页查询
   * @method
   * @name modelList
   */
  modelList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/activiti/modelList"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 新建一个空模型
   * @method
   * @name newModel
   */
  newModel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/activiti/newModel"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 发布模型为流程定义
   * @method
   * @name deployment
   */
  deployment: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/activiti/deployment"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["id"] !== undefined) {
      queryParameters["id"] = params["id"]
    }

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除模型
   * @method
   * @name deleteModel
   */
  deleteModel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/activiti/{ids}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    path = path.replace("{ids}", params["ids"])

    if (params["ids"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: ids"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-获取分页
   * @method
   * @name getLiveCoursePage
   */
  getLiveCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-获取列表，用于上拉加载更多
   * @method
   * @name getLiveCourseList
   */
  getLiveCourseList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-添加|更新
   * @method
   * @name addOrUpdateLiveCourse
   */
  addOrUpdateLiveCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-通过Ids批量查询
   * @method
   * @name getLiveCourseByIds
   */
  getLiveCourseByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-通过Id删除，支持批量删除
   * @method
   * @name deleteLiveCourse
   */
  deleteLiveCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-导出
   * @method
   * @name exportLiveCourse
   */
  exportLiveCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-通过Id查询
   * @method
   * @name getLiveCourse
   */
  getLiveCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播课程-导入
   * @method
   * @name importLiveCourse
   */
  importLiveCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/liveCourse/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 日志-分页获取日志
   * @method
   * @name getSyslogPage
   */
  getSyslogPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/syslog"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-通过Ids批量查询
   * @method
   * @name getCourseLabelByIds
   */
  getCourseLabelByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-导出
   * @method
   * @name exportCourseLabel
   */
  exportCourseLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-获取列表，用于上拉加载更多
   * @method
   * @name getCourseLabelList
   */
  getCourseLabelList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-添加|更新
   * @method
   * @name addOrUpdateCourseLabel
   */
  addOrUpdateCourseLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-获取分页
   * @method
   * @name getCourseLabelPage
   */
  getCourseLabelPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-通过Id删除，支持批量删除
   * @method
   * @name deleteCourseLabel
   */
  deleteCourseLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-导入
   * @method
   * @name importCourseLabel
   */
  importCourseLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 课程标签-通过Id查询
   * @method
   * @name getCourseLabel
   */
  getCourseLabel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/courseLabel/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 账号登录
   * @method
   * @name login
   */
  login: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/login"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["username"] !== undefined) {
      form["username"] = params["username"]
    }

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    if (params["password"] !== undefined) {
      form["password"] = params["password"]
    }

    if (params["password"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: password"))
    }

    if (params["vcode"] !== undefined) {
      form["vcode"] = params["vcode"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 退出
   * @method
   * @name loginOut
   */
  loginOut: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/login"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取图片验证码
   * @method
   * @name generateVcode
   */
  generateVcode: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/login/getVcode"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取message
   * @method
   * @name getMessage
   */
  getMessage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/message/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除message
   * @method
   * @name deleteMessage
   */
  deleteMessage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/message/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取message分页
   * @method
   * @name getMessagePage
   */
  getMessagePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/message"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    if (params["content"] !== undefined) {
      queryParameters["content"] = params["content"]
    }

    if (params["title"] !== undefined) {
      queryParameters["title"] = params["title"]
    }

    if (params["receiver"] !== undefined) {
      queryParameters["receiver"] = params["receiver"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加message
   * @method
   * @name addMessage
   */
  addMessage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/message"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新message
   * @method
   * @name updateMessage
   */
  updateMessage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/message"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商学院首页--获取各类课程列表
   * @method
   * @name getCourseInfo
   */
  getCourseInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/course/getCourseInfo"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 第三方授权标识-获取分页
   * @method
   * @name getOtherPlatformPage
   */
  getOtherPlatformPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/otherPlatform/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 第三方授权标识-通过Ids批量查询
   * @method
   * @name getOtherPlatformByIds
   */
  getOtherPlatformByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/otherPlatform/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 第三方授权标识-通过Id删除，支持批量删除
   * @method
   * @name deleteOtherPlatform
   */
  deleteOtherPlatform: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/otherPlatform/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 第三方授权标识-添加|更新
   * @method
   * @name addOrUpdateOtherPlatform
   */
  addOrUpdateOtherPlatform: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/otherPlatform"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 第三方授权标识-通过Id查询
   * @method
   * @name getOtherPlatform
   */
  getOtherPlatform: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/otherPlatform/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-添加|更新
   * @method
   * @name addOrUpdateLinkType
   */
  addOrUpdateLinkType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-通过Id查询
   * @method
   * @name getLinkType
   */
  getLinkType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-通过Id删除，支持批量删除
   * @method
   * @name deleteLinkType
   */
  deleteLinkType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-通过Ids批量查询
   * @method
   * @name getLinkTypeByIds
   */
  getLinkTypeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-获取列表，用于上拉加载更多
   * @method
   * @name getLinkTypeList
   */
  getLinkTypeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-导入
   * @method
   * @name importLinkType
   */
  importLinkType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-导出
   * @method
   * @name exportLinkType
   */
  exportLinkType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 链接分类-获取分页
   * @method
   * @name getLinkTypePage
   */
  getLinkTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/linkType/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-通过Ids批量查询
   * @method
   * @name getShopInfoNewByIds
   */
  getShopInfoNewByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-添加|更新
   * @method
   * @name addOrUpdateShopInfoNew
   */
  addOrUpdateShopInfoNew: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-获取列表，用于上拉加载更多
   * @method
   * @name getShopInfoNewList
   */
  getShopInfoNewList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-通过Id删除，支持批量删除
   * @method
   * @name deleteShopInfoNew
   */
  deleteShopInfoNew: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-获取各个分类列表数据
   * @method
   * @name getAllShopInfoTypePage
   */
  getAllShopInfoTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/indexShopInfoNews"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-获取分页
   * @method
   * @name getShopInfoNewPage
   */
  getShopInfoNewPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-导出
   * @method
   * @name exportShopInfoNew
   */
  exportShopInfoNew: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-导入
   * @method
   * @name importShopInfoNew
   */
  importShopInfoNew: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商资讯-通过Id查询
   * @method
   * @name getShopInfoNew
   */
  getShopInfoNew: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopInfoNew/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-导入
   * @method
   * @name importLunboImages
   */
  importLunboImages: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-导出
   * @method
   * @name exportLunboImages
   */
  exportLunboImages: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-通过Ids批量查询
   * @method
   * @name getLunboImagesByIds
   */
  getLunboImagesByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-添加|更新
   * @method
   * @name addOrUpdateLunboImages
   */
  addOrUpdateLunboImages: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-获取分页
   * @method
   * @name getLunboImagesPage
   */
  getLunboImagesPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-获取列表，用于上拉加载更多
   * @method
   * @name getLunboImagesList
   */
  getLunboImagesList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-通过Id删除，支持批量删除
   * @method
   * @name deleteLunboImages
   */
  deleteLunboImages: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图-通过Id查询
   * @method
   * @name getLunboImages
   */
  getLunboImages: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImages/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取dataSnapshot分页
   * @method
   * @name getDataSnapshotPage
   */
  getDataSnapshotPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dataSnapshot/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取单个dataSnapshot
   * @method
   * @name getDataSnapshot
   */
  getDataSnapshot: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dataSnapshot/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除dataSnapshot
   * @method
   * @name deleteDataSnapshot
   */
  deleteDataSnapshot: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dataSnapshot/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 数据版本对比
   * @method
   * @name dataVS
   */
  dataVS: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dataSnapshot/dataVS"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["id1"] !== undefined) {
      queryParameters["id1"] = params["id1"]
    }

    if (params["id1"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id1"))
    }

    if (params["id2"] !== undefined) {
      queryParameters["id2"] = params["id2"]
    }

    if (params["id2"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id2"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加dataSnapshot
   * @method
   * @name addDataSnapshot
   */
  addDataSnapshot: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dataSnapshot/addDataSnapshot"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["dataId"] !== undefined) {
      queryParameters["dataId"] = params["dataId"]
    }

    if (params["dataId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dataId"))
    }

    if (params["tableName"] !== undefined) {
      queryParameters["tableName"] = params["tableName"]
    }

    if (params["tableName"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: tableName"))
    }

    if (params["uuId"] !== undefined) {
      queryParameters["uuId"] = params["uuId"]
    }

    if (params["uuId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: uuId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通告查看情况-获取列表，用于上拉加载更多
   * @method
   * @name getSysAnnounceReadInfoList
   */
  getSysAnnounceReadInfoList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通告查看情况-通过Id查询
   * @method
   * @name getSysAnnounceReadInfo
   */
  getSysAnnounceReadInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通告查看情况-通过Id删除
   * @method
   * @name deleteSysAnnounceReadInfo
   */
  deleteSysAnnounceReadInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通告查看情况-添加|更新
   * @method
   * @name addOrUpdateSysAnnounceReadInfo
   */
  addOrUpdateSysAnnounceReadInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取未读消息数量
   * @method
   * @name countAnnounceReadInfo
   */
  countAnnounceReadInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/announce/count"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通告查看情况-获取分页
   * @method
   * @name getSysAnnounceReadInfoPage
   */
  getSysAnnounceReadInfoPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 全部标为已读
   * @method
   * @name readAll
   */
  readAll: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysAnnounceReadInfo/read/all"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取一个菜单详情
   * @method
   * @name getOneMenu
   */
  getOneMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/menus/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除一个菜单
   * @method
   * @name deleteMenu
   */
  deleteMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/menus/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取一个系统全部的菜单按钮树(用于菜单管理）
   * @method
   * @name getMenuTree
   */
  getMenuTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/menus/menuTree"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["menuSys"] !== undefined) {
      queryParameters["menuSys"] = params["menuSys"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加（修改）一个菜单
   * @method
   * @name addMenu
   */
  addMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/menus"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取一个系统全部的菜单按钮树ID（用于数据库添加超级管理员数据）
   * @method
   * @name getMenuIDTree
   */
  getMenuIDTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/auth/menus/menuIDTree"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["menuSys"] !== undefined) {
      queryParameters["menuSys"] = params["menuSys"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-添加|更新
   * @method
   * @name addOrUpdateOndemandCourse
   */
  addOrUpdateOndemandCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-通过Id删除，支持批量删除
   * @method
   * @name deleteOndemandCourse
   */
  deleteOndemandCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-导出
   * @method
   * @name exportOndemandCourse
   */
  exportOndemandCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-通过Id查询
   * @method
   * @name getOndemandCourse
   */
  getOndemandCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-导入
   * @method
   * @name importOndemandCourse
   */
  importOndemandCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-通过Ids批量查询
   * @method
   * @name getOndemandCourseByIds
   */
  getOndemandCourseByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-获取列表，用于上拉加载更多
   * @method
   * @name getOndemandCourseList
   */
  getOndemandCourseList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播课程-获取分页
   * @method
   * @name getOndemandCoursePage
   */
  getOndemandCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/ondemandCourse/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-导入
   * @method
   * @name importUnderLineCourse
   */
  importUnderLineCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-通过Ids批量查询
   * @method
   * @name getUnderLineCourseByIds
   */
  getUnderLineCourseByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-获取分页
   * @method
   * @name getUnderLineCoursePage
   */
  getUnderLineCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-添加|更新
   * @method
   * @name addOrUpdateUnderLineCourse
   */
  addOrUpdateUnderLineCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-获取列表，用于上拉加载更多
   * @method
   * @name getUnderLineCourseList
   */
  getUnderLineCourseList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-通过Id查询
   * @method
   * @name getUnderLineCourse
   */
  getUnderLineCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-通过Id删除，支持批量删除
   * @method
   * @name deleteUnderLineCourse
   */
  deleteUnderLineCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 线下课程公告-导出
   * @method
   * @name exportUnderLineCourse
   */
  exportUnderLineCourse: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/underLineCourse/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取Redis详细信息
   * @method
   * @name getRedisInfo
   */
  getRedisInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/montior/redis/info"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取 redis key 数量
   * @method
   * @name getKeysSize
   */
  getKeysSize: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/montior/redis/keysSize"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取 redis 内存信息
   * @method
   * @name getMemoryInfo
   */
  getMemoryInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/montior/redis/memoryInfo"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取服务器硬件信息
   * @method
   * @name getServerInfos
   */
  getServerInfos: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/montior/getServerInfos"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取磁盘信息
   * @method
   * @name queryDiskInfo
   */
  queryDiskInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/montior/redis/queryDiskInfo"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-获取分页
   * @method
   * @name getIntroductionPage
   */
  getIntroductionPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-通过Ids批量查询
   * @method
   * @name getIntroductionByIds
   */
  getIntroductionByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-导出
   * @method
   * @name exportIntroduction
   */
  exportIntroduction: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-添加|更新
   * @method
   * @name addOrUpdateIntroduction
   */
  addOrUpdateIntroduction: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-获取列表，用于上拉加载更多
   * @method
   * @name getIntroductionList
   */
  getIntroductionList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-导入
   * @method
   * @name importIntroduction
   */
  importIntroduction: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-通过Id删除，支持批量删除
   * @method
   * @name deleteIntroduction
   */
  deleteIntroduction: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台简介-通过Id查询
   * @method
   * @name getIntroduction
   */
  getIntroduction: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/introduction/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取区域树形结构
   * @method
   * @name getAreas
   */
  getAreas: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysArea"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["code"] !== undefined) {
      queryParameters["code"] = params["code"]
    }

    if (params["recursion"] !== undefined) {
      queryParameters["recursion"] = params["recursion"]
    }

    if (params["queryAll"] !== undefined) {
      queryParameters["queryAll"] = params["queryAll"]
    }

    if (params["level"] !== undefined) {
      queryParameters["level"] = params["level"]
    }

    if (params["root"] !== undefined) {
      queryParameters["root"] = params["root"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加sysArea
   * @method
   * @name addArea
   */
  addArea: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysArea"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新sysArea
   * @method
   * @name updateArea
   */
  updateArea: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysArea"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取sysArea
   * @method
   * @name getArea
   */
  getArea: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysArea/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除sysArea
   * @method
   * @name deleteArea
   */
  deleteArea: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysArea/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-通过Id删除，支持批量删除
   * @method
   * @name deleteShopService
   */
  deleteShopService: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务市场首页*****************
   * @method
   * @name getServiceMarketMenu
   */
  getServiceMarketMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/getServiceMarketMenu"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-获取分页
   * @method
   * @name getShopServicePage
   */
  getShopServicePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-添加|更新
   * @method
   * @name addOrUpdateShopService
   */
  addOrUpdateShopService: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-导入
   * @method
   * @name importShopService
   */
  importShopService: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-导出
   * @method
   * @name exportShopService
   */
  exportShopService: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-通过Ids批量查询
   * @method
   * @name getShopServiceByIds
   */
  getShopServiceByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-获取列表，用于上拉加载更多
   * @method
   * @name getShopServiceList
   */
  getShopServiceList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 查询服务标签列表带数据*****************
   * @method
   * @name getcategoryServiceMenu
   */
  getcategoryServiceMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/getLabelServiceMenu"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-获取连表查询分页
   * @method
   * @name getServiceUnionPage
   */
  getServiceUnionPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/getServiceUnionPage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 网站首页*****************
   * @method
   * @name webIndex
   */
  webIndex: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/webIndex"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 查询服务分类树形结构带数据*****************
   * @method
   * @name getServiceMenu
   */
  getServiceMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/getServiceMenu"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务-通过Id查询
   * @method
   * @name getShopService
   */
  getShopService: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/shopService/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-导出
   * @method
   * @name exportSysUserList
   */
  exportSysUserList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-添加|更新
   * @method
   * @name addOrUpdateSysUser
   */
  addOrUpdateSysUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-通过用户名查询
   * @method
   * @name getSysUserByUserName
   */
  getSysUserByUserName: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/username/{username}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{username}", params["username"])

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-通过Id查询
   * @method
   * @name getSysUser
   */
  getSysUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-通过Id删除
   * @method
   * @name deleteSysUser
   */
  deleteSysUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-导入
   * @method
   * @name importSysUser
   */
  importSysUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-获取个人信息
   * @method
   * @name getSysUserInfo
   */
  getSysUserInfo: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/ownInfo"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-获取用户树
   * @method
   * @name getUserTree
   */
  getUserTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/tree"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-修改个人信息
   * @method
   * @name updateSysUser
   */
  updateSysUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/updateSysUser"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-获取列表，用于上拉加载更多
   * @method
   * @name getSysUserList
   */
  getSysUserList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 用户-获取分页
   * @method
   * @name getSysUserPage
   */
  getSysUserPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysUser/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播-获取播放地址-看固定讲师的课
   * @method
   * @name getTencentPlayAddress
   */
  getTencentPlayAddress: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getPlayAddress"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["teacherId"] !== undefined) {
      queryParameters["teacherId"] = params["teacherId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播-获取课程推流地址
   * @method
   * @name getTempPushAddress
   */
  getTempPushAddress: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getTempPushAddress"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["courseId"] !== undefined) {
      queryParameters["courseId"] = params["courseId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播-获取上传音视频签名
   * @method
   * @name getTencentSignature
   */
  getTencentSignature: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getSignature"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 上传文件到腾讯云；测试用，不建议前端直接调用此接口
   * @method
   * @name uploadTencentFile
   */
  uploadTencentFile: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/upload"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["useOrgFileName"] !== undefined) {
      form["useOrgFileName"] = params["useOrgFileName"]
    }

    if (params["bucket"] !== undefined) {
      queryParameters["bucket"] = params["bucket"]
    }

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播-批量获取防盗链url
   * @method
   * @name getTencentVodUrlList
   */
  getTencentVodUrlList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getVodUrlList"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取上传文件的临时密钥
   * @method
   * @name getUploadTencentFileToken
   */
  getUploadTencentFileToken: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/upLoadToken"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["orgFileName"] !== undefined) {
      queryParameters["orgFileName"] = params["orgFileName"]
    }

    if (params["bucket"] !== undefined) {
      queryParameters["bucket"] = params["bucket"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播-获取推流地址-讲师
   * @method
   * @name getTencentPushAddress
   */
  getTencentPushAddress: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getPushAddress"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 直播-获取课程播放地址-根据课程看
   * @method
   * @name getTempPlayAddress
   */
  getTempPlayAddress: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getTempPlayAddress"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["courseId"] !== undefined) {
      queryParameters["courseId"] = params["courseId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除文件
   * @method
   * @name deleteTencentFile
   */
  deleteTencentFile: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["bucket不传则用默认的bucket"] !== undefined) {
      queryParameters["bucket 不传则用默认的bucket"] = params["bucket不传则用默认的bucket"]
    }

    if (params["fileName"] !== undefined) {
      queryParameters["fileName"] = params["fileName"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播-获取超级播放器签名
   * @method
   * @name getTencentPsign
   */
  getTencentPsign: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/psign"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["fileId"] !== undefined) {
      queryParameters["fileID"] = params["fileId"]
    }

    if (params["appId"] !== undefined) {
      queryParameters["appID"] = params["appId"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 点播-获取防盗链url
   * @method
   * @name getTencentVodUrl
   */
  getTencentVodUrl: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/tencent/getVodUrl"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["url"] !== undefined) {
      queryParameters["url"] = params["url"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除音视频
   * @method
   * @name deleteTencentVod
   */
  deleteTencentVod: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/files/deleteVod"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["fileId"] !== undefined) {
      queryParameters["fileId"] = params["fileId"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-获取分页
   * @method
   * @name getLunboImagesTypePage
   */
  getLunboImagesTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-通过Ids批量查询
   * @method
   * @name getLunboImagesTypeByIds
   */
  getLunboImagesTypeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-通过Id查询
   * @method
   * @name getLunboImagesType
   */
  getLunboImagesType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-通过Id删除，支持批量删除
   * @method
   * @name deleteLunboImagesType
   */
  deleteLunboImagesType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-获取列表，用于上拉加载更多
   * @method
   * @name getLunboImagesTypeList
   */
  getLunboImagesTypeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-导入
   * @method
   * @name importLunboImagesType
   */
  importLunboImagesType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-添加|更新
   * @method
   * @name addOrUpdateLunboImagesType
   */
  addOrUpdateLunboImagesType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 轮播图类型-导出
   * @method
   * @name exportLunboImagesType
   */
  exportLunboImagesType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/lunboImagesType/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 电商论坛首页
   * @method
   * @name getEcommerceForumIndex
   */
  getEcommerceForumIndex: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/EcommerceForumIndex"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-获取列表，用于上拉加载更多
   * @method
   * @name getForumList
   */
  getForumList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-通过Id查询
   * @method
   * @name getForum
   */
  getForum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-通过Ids批量查询
   * @method
   * @name getForumByIds
   */
  getForumByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-添加|更新
   * @method
   * @name addOrUpdateForum
   */
  addOrUpdateForum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/addOrUpdateForum"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-通过Id删除，支持批量删除
   * @method
   * @name deleteForum
   */
  deleteForum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-获取分页
   * @method
   * @name getForumPage
   */
  getForumPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-导出
   * @method
   * @name exportForum
   */
  exportForum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛帖子-导入
   * @method
   * @name importForum
   */
  importForum: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forum/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加/更新字典项
   * @method
   * @name addOrUpdateDictItem
   */
  addOrUpdateDictItem: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取字典项-分页
   * @method
   * @name getDictItemPage
   */
  getDictItemPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 校验字典项文本
   * @method
   * @name checkItemText
   */
  checkItemText: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/checkItemText"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["字典项id"] !== undefined) {
      queryParameters["字典项id"] = params["字典项id"]
    }

    if (params["dictId"] !== undefined) {
      queryParameters["dictId"] = params["dictId"]
    }

    if (params["dictId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dictId"))
    }

    if (params["text"] !== undefined) {
      queryParameters["text"] = params["text"]
    }

    if (params["text"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: text"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取数据字典-分页
   * @method
   * @name getDictPage
   */
  getDictPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 校验字典名称
   * @method
   * @name checkDictName
   */
  checkDictName: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/checkDictName"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["id"] !== undefined) {
      queryParameters["id"] = params["id"]
    }

    if (params["dictName"] !== undefined) {
      queryParameters["dictName"] = params["dictName"]
    }

    if (params["dictName"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dictName"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加/更新数据字典
   * @method
   * @name addOrUpdateDict
   */
  addOrUpdateDict: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 校验字典编码
   * @method
   * @name checkDictCode
   */
  checkDictCode: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/checkDictCode"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["id"] !== undefined) {
      queryParameters["id"] = params["id"]
    }

    if (params["dictCode"] !== undefined) {
      queryParameters["dictCode"] = params["dictCode"]
    }

    if (params["dictCode"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dictCode"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 校验字典项值
   * @method
   * @name checkItemValue
   */
  checkItemValue: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/checkItemValue"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["字典项id"] !== undefined) {
      queryParameters["字典项id"] = params["字典项id"]
    }

    if (params["dictId"] !== undefined) {
      queryParameters["dictId"] = params["dictId"]
    }

    if (params["dictId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dictId"))
    }

    if (params["value"] !== undefined) {
      queryParameters["value"] = params["value"]
    }

    if (params["value"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: value"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过Id获取数据字典
   * @method
   * @name getDict
   */
  getDict: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除数据字典
   * @method
   * @name deleteDict
   */
  deleteDict: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 根据字典编码获取字典项
   * @method
   * @name getDictItemList
   */
  getDictItemList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/list/{dictCode}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{dictCode}", params["dictCode"])

    if (params["dictCode"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: dictCode"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过Id获取字典项
   * @method
   * @name getDictItem
   */
  getDictItem: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除数据字典项
   * @method
   * @name deleteDictItem
   */
  deleteDictItem: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/dict/item/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-添加|更新
   * @method
   * @name addOrUpdateNeedType
   */
  addOrUpdateNeedType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-通过Id删除，支持批量删除
   * @method
   * @name deleteNeedType
   */
  deleteNeedType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-通过Id查询
   * @method
   * @name getNeedType
   */
  getNeedType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-获取分页
   * @method
   * @name getNeedTypePage
   */
  getNeedTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-获取列表，用于上拉加载更多
   * @method
   * @name getNeedTypeList
   */
  getNeedTypeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-导出
   * @method
   * @name exportNeedType
   */
  exportNeedType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-通过Ids批量查询
   * @method
   * @name getNeedTypeByIds
   */
  getNeedTypeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求类型-导入
   * @method
   * @name importNeedType
   */
  importNeedType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needType/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取任务分页
   * @method
   * @name getQuartzConfigPage
   */
  getQuartzConfigPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["status"] !== undefined) {
      queryParameters["status"] = params["status"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新任务
   * @method
   * @name updateQuartzConfig
   */
  updateQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 恢复任务
   * @method
   * @name resumeQuartzConfig
   */
  resumeQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/resume/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过Id获取任务详情
   * @method
   * @name getQuartzConfigById
   */
  getQuartzConfigById: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过类名获取任务详情
   * @method
   * @name getQuartzConfigByClazz
   */
  getQuartzConfigByClazz: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/getByClazz/{clazz}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{clazz}", params["clazz"])

    if (params["clazz"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: clazz"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 暂停任务
   * @method
   * @name pauseQuartzConfig
   */
  pauseQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/pause/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除任务
   * @method
   * @name deleteQuartzConfig
   */
  deleteQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/delete/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加任务
   * @method
   * @name addQuartzConfig
   */
  addQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/add"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取任务日志分页
   * @method
   * @name getQuartzLogPage
   */
  getQuartzLogPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/log"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    if (params["quartzId"] !== undefined) {
      queryParameters["quartzId"] = params["quartzId"]
    }

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["result"] !== undefined) {
      queryParameters["result"] = params["result"]
    }

    if (params["startTime"] !== undefined) {
      queryParameters["startTime"] = params["startTime"]
    }

    if (params["endTime"] !== undefined) {
      queryParameters["endTime"] = params["endTime"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 执行一次任务
   * @method
   * @name runQuartzConfig
   */
  runQuartzConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/quartz/run/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-导出
   * @method
   * @name exportMyCollection
   */
  exportMyCollection: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-获取分页
   * @method
   * @name getMyCollectionPage
   */
  getMyCollectionPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-课程收藏--点播课程
   * @method
   * @name ondemandCoursePage
   */
  ondemandCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/ondemandCoursePage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-获取列表，用于上拉加载更多
   * @method
   * @name getMyCollectionList
   */
  getMyCollectionList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-课程收藏--线下课程
   * @method
   * @name underLineCoursePage
   */
  underLineCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/coursePage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-通过Ids批量查询
   * @method
   * @name getMyCollectionByIds
   */
  getMyCollectionByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-添加|更新
   * @method
   * @name addOrUpdateMyCollection
   */
  addOrUpdateMyCollection: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-通过Id删除，支持批量删除
   * @method
   * @name deleteMyCollection
   */
  deleteMyCollection: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-导入
   * @method
   * @name importMyCollection
   */
  importMyCollection: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-课程收藏--直播课程
   * @method
   * @name liveCoursePage
   */
  liveCoursePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/liveCoursePage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-店铺收藏
   * @method
   * @name shopPage
   */
  shopPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/shopPage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-服务收藏
   * @method
   * @name servicePage
   */
  servicePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/servicePage"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 我的收藏-通过Id查询
   * @method
   * @name getMyCollection
   */
  getMyCollection: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/myCollection/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取登录手机短信验证码*********************
   * @method
   * @name getSmsCode
   */
  getSmsCode: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/member/getSmsCode"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取登录验证码
   * @method
   * @name getValidateCode
   */
  getValidateCode: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/member/getValidateCode"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 百度富文本编辑框获取配置接口
   * @method
   * @name ueditorGetConfig
   */
  ueditorGetConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/ueditor"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'text/html'

    if (params["action"] !== undefined) {
      queryParameters["action"] = params["action"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 百度富文本编编辑器上传文件接口
   * @method
   * @name ueditorServerUrl
   */
  ueditorServerUrl: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/file/ueditor"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["upfile"] !== undefined) {
      form["upfile"] = params["upfile"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 发送消息
   * @method
   * @name sendMessage
   */
  sendMessage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate/send/message"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取messageTemplate
   * @method
   * @name getMessageTemplate
   */
  getMessageTemplate: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除messageTemplate
   * @method
   * @name deleteMessageTemplate
   */
  deleteMessageTemplate: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取messageTemplate分页
   * @method
   * @name getMessageTemplatePage
   */
  getMessageTemplatePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    if (params["code"] !== undefined) {
      queryParameters["code"] = params["code"]
    }

    if (params["content"] !== undefined) {
      queryParameters["content"] = params["content"]
    }

    if (params["title"] !== undefined) {
      queryParameters["title"] = params["title"]
    }

    if (params["type"] !== undefined) {
      queryParameters["type"] = params["type"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加messageTemplate
   * @method
   * @name addMessageTemplate
   */
  addMessageTemplate: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新messageTemplate
   * @method
   * @name updateMessageTemplate
   */
  updateMessageTemplate: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/messageTemplate"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-获取分页
   * @method
   * @name getNeedPage
   */
  getNeedPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-获取列表，用于上拉加载更多
   * @method
   * @name getNeedList
   */
  getNeedList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-通过Id查询
   * @method
   * @name getNeed
   */
  getNeed: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-通过Id删除，支持批量删除
   * @method
   * @name deleteNeed
   */
  deleteNeed: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-导出
   * @method
   * @name exportNeed
   */
  exportNeed: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-添加|更新
   * @method
   * @name addOrUpdateNeed
   */
  addOrUpdateNeed: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-导入
   * @method
   * @name importNeed
   */
  importNeed: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求-通过Ids批量查询
   * @method
   * @name getNeedByIds
   */
  getNeedByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/need/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 账户绑定并登录
   * @method
   * @name wechatBindAndLogin
   */
  wechatBindAndLogin: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/wechatBindAndLogin"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["username"] !== undefined) {
      form["username"] = params["username"]
    }

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    if (params["vcode"] !== undefined) {
      form["vcode"] = params["vcode"]
    }

    if (params["unionId"] !== undefined) {
      form["unionId"] = params["unionId"]
    }

    if (params["unionId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: unionId"))
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 注册账号解封
   * @method
   * @name unsealingPlatUser
   */
  unsealingPlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/unsealingPlatUser"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-添加|更新
   * @method
   * @name addOrUpdatePlatUser
   */
  addOrUpdatePlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-获取列表，用于上拉加载更多
   * @method
   * @name getPlatUserList
   */
  getPlatUserList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 网站登录(clientId在请求头必须填写)
   * @method
   * @name webLogin
   */
  webLogin: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/webLogin"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["username"] !== undefined) {
      form["username"] = params["username"]
    }

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    if (params["password"] !== undefined) {
      form["password"] = params["password"]
    }

    if (params["password"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: password"))
    }

    if (params["vcode"] !== undefined) {
      form["vcode"] = params["vcode"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 通过Id进行账号冻结，支持批量操作（有权限）
   * @method
   * @name freezePlatUser
   */
  freezePlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/freezePlatUser"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 账户注册(需要验证是否存在账号)(clientId在请求头必须填写)
   * @method
   * @name webRegister
   */
  webRegister: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/webRegister"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-获取分页
   * @method
   * @name getPlatUserPage
   */
  getPlatUserPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-导出
   * @method
   * @name exportPlatUser
   */
  exportPlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取QQ登录二维码地址
   * @method
   * @name getQQQrcodeUrl
   */
  getQQQrcodeUrl: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/getQQQrcodeUrl"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-通过Ids批量查询
   * @method
   * @name getPlatUserByIds
   */
  getPlatUserByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-通过Id查询
   * @method
   * @name getPlatUser
   */
  getPlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取微信登录二维码地址
   * @method
   * @name getOpenQrcodeUrl
   */
  getOpenQrcodeUrl: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/getOpenQrcodeUrl"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["redirectUrl"] !== undefined) {
      queryParameters["redirectUrl"] = params["redirectUrl"]
    }

    if (params["redirectUrl"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: redirectUrl"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 重新设置密码[忘记密码](需要验证是否存在账号)(clientId在请求头必须填写)
   * @method
   * @name forget
   */
  forget: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/forget"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8'

    if (params["username"] !== undefined) {
      form["username"] = params["username"]
    }

    if (params["username"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: username"))
    }

    if (params["password"] !== undefined) {
      form["password"] = params["password"]
    }

    if (params["password"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: password"))
    }

    if (params["vcode"] !== undefined) {
      form["vcode"] = params["vcode"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 平台注册用户-通过Id删除，支持批量删除
   * @method
   * @name deletePlatUser
   */
  deletePlatUser: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/platUser/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-通过Ids批量查询
   * @method
   * @name getForumTypeByIds
   */
  getForumTypeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-添加|更新
   * @method
   * @name addOrUpdateForumType
   */
  addOrUpdateForumType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-获取分页
   * @method
   * @name getForumTypePage
   */
  getForumTypePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-获取列表，用于上拉加载更多
   * @method
   * @name getForumTypeList
   */
  getForumTypeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-导出
   * @method
   * @name exportForumType
   */
  exportForumType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-通过Id删除，支持批量删除
   * @method
   * @name deleteForumType
   */
  deleteForumType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-通过Id查询
   * @method
   * @name getForumType
   */
  getForumType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 论坛类型-导入
   * @method
   * @name importForumType
   */
  importForumType: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/forumType/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-添加|更新
   * @method
   * @name addOrUpdateNotice
   */
  addOrUpdateNotice: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-通过Id查询
   * @method
   * @name getNotice
   */
  getNotice: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-通过Ids批量查询
   * @method
   * @name getNoticeByIds
   */
  getNoticeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-获取分页
   * @method
   * @name getNoticePage
   */
  getNoticePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-导入
   * @method
   * @name importNotice
   */
  importNotice: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-获取列表，用于上拉加载更多
   * @method
   * @name getNoticeList
   */
  getNoticeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-通过Id删除，支持批量删除
   * @method
   * @name deleteNotice
   */
  deleteNotice: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 公告-导出
   * @method
   * @name exportNotice
   */
  exportNotice: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/notice/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-获取分页
   * @method
   * @name getServiceTypeTreePage
   */
  getServiceTypeTreePage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-获取列表，用于上拉加载更多
   * @method
   * @name getServiceTypeTreeList
   */
  getServiceTypeTreeList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-通过Id查询
   * @method
   * @name getServiceTypeTree
   */
  getServiceTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务二级分类菜单树===============
   * @method
   * @name getServiceTypeTreeMenu
   */
  getServiceTypeTreeMenu: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/getServiceTypeTreeMenu"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-导入
   * @method
   * @name importServiceTypeTree
   */
  importServiceTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-导出
   * @method
   * @name exportServiceTypeTree
   */
  exportServiceTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-通过Ids批量查询
   * @method
   * @name getServiceTypeTreeByIds
   */
  getServiceTypeTreeByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-通过Id删除，支持批量删除
   * @method
   * @name deleteServiceTypeTree
   */
  deleteServiceTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 服务类型-添加|更新
   * @method
   * @name addOrUpdateServiceTypeTree
   */
  addOrUpdateServiceTypeTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/serviceTypeTree"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取配置-分页
   * @method
   * @name getSettingPage
   */
  getSettingPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/setting/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取单个配置
   * @method
   * @name getSetting
   */
  getSetting: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/setting/{key}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{key}", params["key"])

    if (params["key"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: key"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除配置
   * @method
   * @name deleteSetting
   */
  deleteSetting: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/setting/{key}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'

    path = path.replace("{key}", params["key"])

    if (params["key"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: key"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加/更新配置
   * @method
   * @name addSetting
   */
  addSetting: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/setting"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/x-www-form-urlencoded'

    if (params["key"] !== undefined) {
      form["key"] = params["key"]
    }

    if (params["value"] !== undefined) {
      form["value"] = params["value"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-获取分页
   * @method
   * @name getNavigationPage
   */
  getNavigationPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-通过Ids批量查询
   * @method
   * @name getNavigationByIds
   */
  getNavigationByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-获取列表，用于上拉加载更多
   * @method
   * @name getNavigationList
   */
  getNavigationList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-添加|更新
   * @method
   * @name addOrUpdateNavigation
   */
  addOrUpdateNavigation: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-通过Id查询
   * @method
   * @name getNavigation
   */
  getNavigation: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-导入
   * @method
   * @name importNavigation
   */
  importNavigation: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-通过Id删除，支持批量删除
   * @method
   * @name deleteNavigation
   */
  deleteNavigation: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 导航-导出
   * @method
   * @name exportNavigation
   */
  exportNavigation: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/navigation/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-获取分页
   * @method
   * @name getLinkPage
   */
  getLinkPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-获取列表，用于上拉加载更多
   * @method
   * @name getLinkList
   */
  getLinkList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-导出
   * @method
   * @name exportLink
   */
  exportLink: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-通过Ids批量查询
   * @method
   * @name getLinkByIds
   */
  getLinkByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-通过Id删除，支持批量删除
   * @method
   * @name deleteLink
   */
  deleteLink: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-导入
   * @method
   * @name importLink
   */
  importLink: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-添加|更新
   * @method
   * @name addOrUpdateLink
   */
  addOrUpdateLink: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 友情链接-通过Id查询
   * @method
   * @name getLink
   */
  getLink: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/link/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更改流程状态
   * @method
   * @name changeProcessStatus
   */
  changeProcessStatus: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/changeProcessStatus"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["processId"] !== undefined) {
      queryParameters["processId"] = params["processId"]
    }

    if (params["processId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: processId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除流程部署
   * @method
   * @name deleteProcess
   */
  deleteProcess: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/{deployIds}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    path = path.replace("{deployIds}", params["deployIds"])

    if (params["deployIds"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: deployIds"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 流程转换成模型
   * @method
   * @name convertToModel
   */
  convertToModel: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/convertToModel"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["processId"] !== undefined) {
      queryParameters["processId"] = params["processId"]
    }

    if (params["processId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: processId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取流程定义图片
   * @method
   * @name getProcessImg
   */
  getProcessImg: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/getProcessImg"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["processId"] !== undefined) {
      queryParameters["processId"] = params["processId"]
    }

    if (params["processId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: processId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 高级分页查询
   * @method
   * @name getProcessList
   */
  getProcessList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/getProcessList"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["name"] !== undefined) {
      queryParameters["name"] = params["name"]
    }

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取流程XML
   * @method
   * @name getProcessXML
   */
  getProcessXML: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/resource/getProcessXML"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    if (params["processId"] !== undefined) {
      queryParameters["processId"] = params["processId"]
    }

    if (params["processId"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: processId"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-导出
   * @method
   * @name exportSysDepartList
   */
  exportSysDepartList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-添加|更新
   * @method
   * @name addOrUpdateSysDepart
   */
  addOrUpdateSysDepart: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-获取分页
   * @method
   * @name getSysDepartPage
   */
  getSysDepartPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-获取列表，用于上拉加载更多
   * @method
   * @name getSysDepartList
   */
  getSysDepartList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-导入
   * @method
   * @name importSysDepart
   */
  importSysDepart: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-通过Id查询
   * @method
   * @name getSysDepart
   */
  getSysDepart: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-通过Id删除
   * @method
   * @name deleteSysDepart
   */
  deleteSysDepart: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 部门-获取部门树
   * @method
   * @name getDepartTree
   */
  getDepartTree: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/sysDepart/tree"
    let body = {}
    let queryParameters = params
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-获取列表，用于上拉加载更多
   * @method
   * @name getNeedConfigList
   */
  getNeedConfigList: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/list"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-获取分页
   * @method
   * @name getNeedConfigPage
   */
  getNeedConfigPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/page"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-通过Ids批量查询
   * @method
   * @name getNeedConfigByIds
   */
  getNeedConfigByIds: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/findByIds"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-添加|更新
   * @method
   * @name addOrUpdateNeedConfig
   */
  addOrUpdateNeedConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-通过Id查询
   * @method
   * @name getNeedConfig
   */
  getNeedConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-通过Id删除，支持批量删除
   * @method
   * @name deleteNeedConfig
   */
  deleteNeedConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/delete"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-导入
   * @method
   * @name importNeedConfig
   */
  importNeedConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/import"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'multipart/form-data'

    if (params["file"] !== undefined) {
      form["file"] = params["file"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 需求配置-导出
   * @method
   * @name exportNeedConfig
   */
  exportNeedConfig: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/needConfig/export"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/msexcel;charset=UTF-8'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取attachment分页
   * @method
   * @name getAttachmentPage
   */
  getAttachmentPage: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/attachment"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["pageIndex"] !== undefined) {
      queryParameters["pageIndex"] = params["pageIndex"]
    }

    if (params["pageSize"] !== undefined) {
      queryParameters["pageSize"] = params["pageSize"]
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 添加attachment
   * @method
   * @name addAttachment
   */
  addAttachment: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/attachment"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'POST',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 更新attachment
   * @method
   * @name updateAttachment
   */
  updateAttachment: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/attachment"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    if (params["body"] !== undefined) {
      body = params["body"]
    }

    let url = domain + path
    let options = {
      method: 'PUT',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 获取attachment
   * @method
   * @name getAttachment
   */
  getAttachment: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/attachment/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'GET',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
  /**
   * 删除attachment
   * @method
   * @name updateAttachment
   */
  updateAttachment: (params = {}) => {

    let domain = window.api.base + `/api`
    let path = "/attachment/{id}"
    let body = {}
    let queryParameters = {}
    let headers = {}
    let form = {}

    headers["Accept"] = 'application/json'
    headers["Content-Type"] = 'application/json'

    path = path.replace("{id}", params["id"])

    if (params["id"] === undefined) {
      return Promise.reject(new Error("Missing required  parameter: id"))
    }

    let url = domain + path
    let options = {
      method: 'DELETE',
      url: url,
      params: queryParameters,
      data: body,
      headers: headers
    }
    if (Object.keys(form).length > 0) {
      options.data = qs.stringify(form);
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    }

    return axios(options).then(ret => {
      return ret;
    });
  },
}