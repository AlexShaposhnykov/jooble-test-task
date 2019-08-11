export const isMedicineLoading = (state) => state.medicine.medicineList.isLoading;
export const getMedicineList = (state) => state.medicine.medicineList.medicine;
export const getMedicineLoadingError = (state) => state.medicine.medicineList.error;

export const isMedicineAdding = (state) => state.medicine.addMedicine.adding;
export const isMedicineAdded = (state) => state.medicine.addMedicine.isAdded;
export const getMedicineAddingError = (state) => state.medicine.addMedicine.error;

export const isMedicineEditing = (state) => state.medicine.editMedicine.editing;
export const isMedicineEdited = (state) => state.medicine.editMedicine.isEdited;
export const getMedicineEditingError = (state) => state.medicine.editMedicine.error;
