import { combineReducers } from 'redux';
import conocimientoReducer from './slice/proyecto.slice'; // Importa el reductor de conocimiento u otros reductores que tengas

const rootReducer = combineReducers({
  conocimiento: conocimientoReducer,
  // Otros reductores aquí...
});

export type RootState = ReturnType<typeof rootReducer>;