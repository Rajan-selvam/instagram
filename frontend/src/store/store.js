import { configureStore } from '@reduxjs/toolkit';
import { ErrorHandler } from '../sevices/middleware/ErrorHandler';
export const store = configureStore({
  reducer: {
    
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .concat([
      ErrorHandler,
      
    ])
});
