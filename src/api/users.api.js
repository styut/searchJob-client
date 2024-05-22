import axios from 'axios';
// קובץ זה מכיל את כל קריאות השרת עבור קטגוריות
// שליפה של כל הרשימה
export const getUser = (id) => { 
    return axios.get(`http://localhost:3000/user/${id}`);
}

// מחיקה
export const deleteCategory = (id) => {
    return axios.delete(`http://localhost:3000/categories /${id}`);
}

// עדכון
export const updateCategory = (id, categoryName) => {
    return axios.put(`http://localhost:3000/categories/${id}`, {
        categoryName,
    });
}

// יצירה
export const createUser = (newUser) => {
    return axios.post(`http://localhost:3000/user`, 
        newUser,
    );
}