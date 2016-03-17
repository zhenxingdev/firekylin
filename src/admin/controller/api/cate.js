'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * get
   * @return {[type]} [description]
   */
  getAction(self){
    if(this.get('pid')) {
      this.modelInstance.where({pid: this.get('pid')});
    }
    return super.getAction(self);
  }

  /**
   * add user
   * @return {[type]} [description]
   */
  async postAction(){
    let data = this.post();

    let insertId = await this.modelInstance.addCate(data);
    return this.success({id: insertId});
  }
  /**
   * update user info
   * @return {[type]} [description]
   */
  async putAction(){
    if (!this.id) {
      return this.fail('PARAMS_ERROR');
    }
    let data = this.post();
    data.id = this.id;
    let rows = await this.modelInstance.saveCate(data);
    return this.success({affectedRows: rows});
  }
}