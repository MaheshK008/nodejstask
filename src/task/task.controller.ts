import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService
    ) { }


    /**
     * Function Name: fetchData
     * Method: GET
     * Description: This function is used to fetch all data from database
     */
    @Get("fetchData")
    async fetchData() {
        try {
            let res = await this.taskService.findAll();
            if (res.length > 0) return res;
            return "no data found."
        } catch (error) {
            return error;
        }
    }


    /**
     * Function Name: fetchDocByID
     * Method: GET
     * Description: This function is used to fetch document by given id
     */
    @Get("fetchDocByID/:id")
    async fetchDocByID(@Param("id") id: String) {
        try {
            let res = await this.taskService.fetchDocByID(id);
            if (res) return res;
            return "no data found"
        } catch (error) {

        }
    }

    /**
     * Function Name: fetchDataByLangID
     * Method: POST
     * Description: This function is used to fetch language data by given id and language id
     */
    @Post("fetchDataByLangID")
    async fetchDataByLangID(@Body() dto: any) {
        try {
            let { id, LangID } = dto;
            let res = await this.taskService.fetchDataByLangID(id, LangID);
            if (res.length > 0) {
                if (res[0].Language.length > 0) return res;
                return "There is no Language for given ID";
            };
            return "No Data Found.";
        } catch (error) {
            return error;
        }
    }


    /**
     * Function Name: fetchDataByCompID
     * Method: POST
     * Description: This function is used to fetch complexity data by given id ,language id and compexity id
     */
    @Post("fetchDataByCompID")
    async fetchDataByCompID(@Body() dto: any) {
        try {
            return this.taskService.fetchDataByCompID(dto);
        } catch (error) {
            return error;
        }
    }


    /**
     * Function Name: createDoc
     * Method: POST
     * Description: This function is used to insert the new document into the database
     */
    @Post("createDoc")
    async createDoc(@Body() dto: any) {
        try {
            return this.taskService.createDoc(dto);
        } catch (error) {
            return error;
        }
    }


    /**
     * Function Name: deleteDoc
     * Method: DELETE
     * Description: This function is used to delete the document by given id;
     */
    @Delete("deleteDoc/:id")
    async deleteDoc(@Param("id") id: String) {
        try {
            return this.taskService.deleteDoc(id);
        } catch (error) {
            return error;
        }
    }

    /**
     * Function Name: updateDoc
     * Method: PUT
     * Description: This function is used to update the document by given id;
     */
    @Put("updateDoc/:id")
    async updateDoc(@Param("id") id: String, @Body() dto: any) {
        try {
            return this.taskService.updateDoc(id, dto);
        } catch (error) {
            return error;
        }
    }
}
