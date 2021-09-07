import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AdminReducer from "./admin/reducers";
import userReducer from "./user/reducers";
import commonReducer from "./common/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin", "common"],
};

const rootReducer = combineReducers({
  admin: AdminReducer,
  user: userReducer,
  common: commonReducer,
});

export default persistReducer(persistConfig, rootReducer);
