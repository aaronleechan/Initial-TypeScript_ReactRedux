import { AnyAction } from "redux";

interface UserEvent{
    id: number;
    title: string;
    dateStart: string;
    dateEnd: string;
}

interface userEventsState {
    byIds: Record<UserEvent['id'], UserEvent>;
    allIds: UserEvent['id'][];
}

const initialState: userEventsState = {
    byIds:{},
    allIds:[]
}

const userEventsReducer = (
    state: userEventsState = initialState,
    action: AnyAction
) =>{

    switch(action.type){
        default: 
            return state;
            
    }
}

export default userEventsReducer;