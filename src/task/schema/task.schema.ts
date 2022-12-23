import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = Task_col & Document;

class ComplexityProps {
    @Prop()
    "Title": String;

    @Prop()
    "Date": String;

    @Prop()
    "LowResolution": String;

    @Prop()
    "HighResolution": String;

    @Prop()
    "Description": String;
}

class Images{
    @Prop()
    "Title": String;

    @Prop()
    "Date": String;

    @Prop()
    "LowResolution": String;

    @Prop()
    "HighResolution": String;

    @Prop()
    "BeforeComparison": String;

    @Prop()
    "BeforeDescription": String;

    @Prop()
    "AfterComparison": String;

    @Prop()
    "AfterDescription": String;

    @Prop()
    "Description": String;
}

class Complexity{
    @Prop()
    "CompID": Number;
    
    @Prop()
    "Title": String;

    @Prop()
    "Name": String;

    @Prop()
    "PlaceMade": String;

    @Prop()
    "PlaceDisplayed": String;

    @Prop()
    "Artist": String;

    @Prop()
    "Manufacturer": String;

    @Prop()
    "Built by": String;

    @Prop()
    "Height": String;

    @Prop()
    "HeightUnit": String;

    @Prop()
    "Weight": String;

    @Prop()
    "WeightUnit": String;

    @Prop()
    "Width": String;

    @Prop()
    "WidthUnit": String;

    @Prop()
    "Length": String;

    @Prop()
    "LengthUnit": String;

    @Prop()
    "Area": String;

    @Prop()
    "AreaUnit": String;

    @Prop()
    "MeasurementUnit": String;

    @Prop()
    "Description": String;

    @Prop()
    "VoiceDescription": String;

    @Prop()
    "Material": String;

    @Prop()
    "Classification": String;

    @Prop()
    "Category": String;

    @Prop()
    "Tags": [String];

    @Prop()
    "Videos":[ComplexityProps];

    @Prop()
    "Images":[Images];

    @Prop()
    "Audio":[ComplexityProps];

    @Prop()
    "3D":[ComplexityProps];
}

class Language{
    @Prop()
    LangID:String;

    @Prop()
    Complexity:[Complexity];
}

class RelatedItemsProps{       
    @Prop()
    ID: String;
}

@Schema()
export class Task_col {
    @Prop()
    Type: String;

    @Prop()
    CustomerID: Number;

    @Prop()
    Archived: String;

    @Prop()
    DateCreated: String;

    @Prop()
    "Dimension(H/W/L)": String;

    @Prop()
    "Vistors/Year": String;

    @Prop()
    "Year Created": String;

    @Prop()
    Capacity: String;

    @Prop()
    "Construction started": String;

    @Prop()
    Opened: String;

    @Prop()
    CurrentValue: String;

    @Prop()
    InitialCost: String;

    @Prop()
    Latitude: String;

    @Prop()
    Longitude: String;

    @Prop()
    Language: [Language];

    @Prop()
    RelatedItems: [RelatedItemsProps]

}


export const TaskSchema = SchemaFactory.createForClass(Task_col);