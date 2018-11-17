const mysqlHelper = require('./../db/mysql-helper.js');

const userinfo = {

  /**
   * 增加一条数据
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async add(args) {
    const sql = 'INSERT INTO userinfo(UserName, UserPass) VALUES(?, ?)';
    const params = [args.username, args.userpass];
    const result = await mysqlHelper.query(sql, params);
    return result;
  },

  /**
   * 根据UserName得到一条数据
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async getByUserName(args) {
    const sql = 'SELECT Id, UserName, UserPass FROM userinfo WHERE UserName = ?';
    const params = [args.username];
    const result = await mysqlHelper.query(sql, params);
    return result;
  },

  /**
   * 根据UserName得到数量
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async getCountByUserName(args) {
    const sql = 'SELECT COUNT(1) AS UserNum FROM userinfo WHERE UserName = ?';
    const params = [args.username];
    const result = await mysqlHelper.query(sql, params);
    return result;
  },

};

module.exports = userinfo;