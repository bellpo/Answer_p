
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Car
 * DateTime = Mon Nov 08 2021 23:58:39 GMT+0800 (中国标准时间)
 * Author = bellpo
 * FileBasename = Wheel.ts
 * FileBasenameNoExtension = Wheel
 * URL = db://assets/Script/Wheel.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Car')
export class Car extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property
    

    start () {
    }

    
}
