import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class PargeMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {

    if(!isValidObjectId(value)){
      throw new BadRequestException(`${value} no es mongoId valido` )
    }
    return value;
  }
}
