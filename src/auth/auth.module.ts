import { Module } from '@nestjs/common';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports :[AuthModule,UserModule,BookmarkModule],
    controllers :[AuthController],
    providers:[AuthService]
})
export class AuthModule {}
