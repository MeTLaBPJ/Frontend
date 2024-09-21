import api from '../api/api'

export const putUser = async (userData) => {
    try {
        const response = await api.put('/api/user/update', userData );

        if (response.status === 200) {
            console.log('Profile updated successfully');
            // You can add a success message or update UI here
        } else {
            console.error('Failed to update profile');
            // You can add an error message or handle the error here
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        // You can add an error message or handle the error here
    }
};