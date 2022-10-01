import { configureStore} from '@reduxjs/toolkit';
import { Bird } from '../models/bird_type';
import   birdReducer   from './slices/bird_slice';


export interface AppStore {
    bird        : Bird;
    
}

// const reducers = combineReducers<AppStore>({
//         bird        : birdReducer,
      
//    });

export const store = configureStore({
    reducer:{
        birdState        : birdReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


