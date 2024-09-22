import api from './api';

export const deleteUser = async () => {
    try {
        const response = await api.delete('/api/user/delete');
        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Failed to delete user account' };
        }
    } catch (error) {
        return { success: false, error: error.message };
    }
};