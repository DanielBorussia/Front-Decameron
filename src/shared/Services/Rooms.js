import { axiosInstanceDecameron } from "./Instance";


export const addAssignmentRoom = (data) => {
    return axiosInstanceDecameron.post(`assignmentRooms`, data);
};

export const deleteAssignmentRoom = (idRoom) => {
    return axiosInstanceDecameron.delete(`assignmentRooms/${idRoom}`);
};