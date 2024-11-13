<script setup>
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, onBeforeMount, ref } from 'vue';
import { table } from '../resources/PersonResource';

onMounted(() => {
    table.getData().then((data) => (records.value = data));
    isLoading.value = false;
});

onBeforeMount(() => {
    table.getColumns().then((res) => (columns.value = res));
});

const toast = useToast();
const dt = ref();
const records = ref();
const columns = ref();
const isLoading = ref(true);
// const productDialog = ref(false);
// const deleteProductDialog = ref(false);
// const deleteRecordsDialog = ref(false);
const record = ref({});
const selectedRecord = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
// const submitted = ref(false);
// const statuses = ref([
//     { label: 'INSTOCK', value: 'instock' },
//     { label: 'LOWSTOCK', value: 'lowstock' },
//     { label: 'OUTOFSTOCK', value: 'outofstock' }
// ]);

// function openNew() {
//     record.value = {};
//     submitted.value = false;
//     productDialog.value = true;
// }

// function hideDialog() {
//     productDialog.value = false;
//     submitted.value = false;
// }

    
</script>

<template>

    <!-- Cargando -->
     <div v-show="isLoading">
         <LoadingTable  />
     </div>

    <!-- Mostrar la tabla -->
    <div v-show="!isLoading">
        <div class="card">
            <!-- <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="secondary" @click="confirmDeleteSelected" :disabled="!selectedRecords || !selectedRecords.length" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar> -->
            <!-- v-model:selection="selectedRecords" -->
            <DataTable
                ref="dt"
                :value="records"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0">Manage Records</h4>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>

                <!-- Construir columnas de la tabla -->
                <template v-for="column in columns" :key="column.field">

                    <!-- Plantilla para columna tipo TEXT -->
                    <Column v-if="column.type === 'text'" :field="column.field" :header="column.header" :sortable="column.sortable" style="min-width: 16rem">
                        <template #body="slotProps">
                            {{ column.format ? column.format(slotProps.data) : slotProps.data[column.field] }}
                        </template>
                    </Column>

                </template>

            </DataTable>
        </div>

        <!-- <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Record Details" :modal="true">
            <div class="flex flex-col gap-6">
                <img v-if="record.image" :src="`https://primefaces.org/cdn/primevue/images/record/${record.image}`" :alt="record.image" class="block m-auto pb-4" />
                <div>
                    <label for="name" class="block font-bold mb-3">Name</label>
                    <InputText id="name" v-model.trim="record.name" required="true" autofocus :invalid="submitted && !record.name" fluid />
                    <small v-if="submitted && !record.name" class="text-red-500">Name is required.</small>
                </div>
                <div>
                    <label for="description" class="block font-bold mb-3">Description</label>
                    <Textarea id="description" v-model="record.description" required="true" rows="3" cols="20" fluid />
                </div>
                <div>
                    <label for="inventoryStatus" class="block font-bold mb-3">Inventory Status</label>
                    <Select id="inventoryStatus" v-model="record.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status" fluid></Select>
                </div>

                <div>
                    <span class="block font-bold mb-4">Category</span>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="flex items-center gap-2 col-span-6">
                            <RadioButton id="category1" v-model="record.category" name="category" value="Accessories" />
                            <label for="category1">Accessories</label>
                        </div>
                        <div class="flex items-center gap-2 col-span-6">
                            <RadioButton id="category2" v-model="record.category" name="category" value="Clothing" />
                            <label for="category2">Clothing</label>
                        </div>
                        <div class="flex items-center gap-2 col-span-6">
                            <RadioButton id="category3" v-model="record.category" name="category" value="Electronics" />
                            <label for="category3">Electronics</label>
                        </div>
                        <div class="flex items-center gap-2 col-span-6">
                            <RadioButton id="category4" v-model="record.category" name="category" value="Fitness" />
                            <label for="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <label for="price" class="block font-bold mb-3">Price</label>
                        <InputNumber id="price" v-model="record.price" mode="currency" currency="USD" locale="en-US" fluid />
                    </div>
                    <div class="col-span-6">
                        <label for="quantity" class="block font-bold mb-3">Quantity</label>
                        <InputNumber id="quantity" v-model="record.quantity" integeronly fluid />
                    </div>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveProduct" />
            </template>
        </Dialog> -->

        <!-- <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="record"
                    >Are you sure you want to delete <b>{{ record.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
                <Button label="Yes" icon="pi pi-check" @click="deleteProduct" />
            </template>
        </Dialog> -->

        <!-- <Dialog v-model:visible="deleteRecordsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="record">Are you sure you want to delete the selected records?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteRecordsDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedRecords" />
            </template>
        </Dialog> -->
    </div>
</template>