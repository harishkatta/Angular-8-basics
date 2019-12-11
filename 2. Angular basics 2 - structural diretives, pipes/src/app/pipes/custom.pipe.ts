import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "convertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        console.log('value', value);
        console.log('character', character);
        return value.replace(character, "  ");
    }
}
