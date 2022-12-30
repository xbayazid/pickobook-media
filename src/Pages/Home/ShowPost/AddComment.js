import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AddComment = (post, refetch) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default AddComment;