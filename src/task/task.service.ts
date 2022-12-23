import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDocument, Task_col } from './schema/task.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task_col.name) private readonly taskModel: Model<TaskDocument>
    ) { }


    async findAll() {
        try {
            return await this.taskModel.find();
        } catch (error) {
            return error;
        }
    }

    async fetchDocByID(id: String) {
        try {
            return await this.taskModel.findOne({ _id: id });
        } catch (error) {
            return error;
        }
    }

    async fetchDataByLangID(id: String, LangID: String) {
        try {
            let res = await this.taskModel.find({
                $and: [
                    {
                        _id: id,
                    }
                ]
            },
                {
                    _id: 1,
                    Language: {
                        $filter: {
                            input: "$Language",
                            as: "lang",
                            cond: {
                                $eq: [
                                    "$$lang.LangID",
                                    LangID
                                ]
                            }
                        }
                    },
                });
            return res;
        } catch (error) {
            return error;
        }
    }

    async fetchDataByCompID(dto: any) {
        try {
            const { id, LangID, CompID } = dto;
            let languageInfo = await this.fetchDataByLangID(id, LangID);
            if (languageInfo.length > 0) {
                const lang = languageInfo[0].Language;
                if (lang.length > 0) {

                    let complexity = lang[0].Complexity.filter((arr: any) => arr.CompID === CompID);

                    if (complexity.length > 0) return {
                        _id: id,
                        LangID: LangID,
                        complexity: complexity
                    }

                    return "There is no Compexity for given ID"

                } else {
                    return "There is no language for give ID."
                }
            } else {
                return "no data found";
            }

        } catch (error) {
            return error;
        }
    }

    async createDoc(dto: any) {
        try {
            return await new this.taskModel(dto).save();
        } catch (error) {
            return error;
        }
    }

    async deleteDoc(id: String) {
        try {
            let res = await this.taskModel.deleteOne({_id:id});
            if(res.deletedCount>0) return "Successfully Deleted."
            return "No Data found."
        } catch (error) {
            return error;
        }
    }

    async updateDoc(id: String, dto: any) {
        try {
            let res = await this.taskModel.updateOne({_id:id},dto);
            if(res.matchedCount>0) return "Successfully Updated.";
            return "No Data found."
        } catch (error) {
            return error;
        }
    }
}
