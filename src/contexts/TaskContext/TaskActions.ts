// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a açõa disparada, geralmente é um objeto com type e (opcionalmente) payload
// payload <- os dados extras enviados junto com a action, se necessário para atualiza o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionWithPayload =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
      payload: TaskModel;
    };

export type TaskActionWithoutPayload = {
  type: TaskActionsTypes.RESET_STATE;
};

export type TaskActionModel = 
  | TaskActionWithPayload 
  | TaskActionWithoutPayload;
