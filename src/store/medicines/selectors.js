export const isMedicineLoading = (state) => state.medicine.medicineList.isLoading;

export const getMedicineList = (state) => state.medicine.medicineList.medicine;

export const getMedicineLoadingError = (state) => state.medicine.medicineList.error;
