"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_controller_1 = require("./comments.controller");
const comments_service_1 = require("./comments.service");
const socket_comments_gateway_1 = require("./socket-comments.gateway");
const typeorm_1 = require("@nestjs/typeorm");
const comments_entity_1 = require("./comments.entity");
const news_module_1 = require("../news.module");
const user_module_1 = require("../../user/user.module");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService, socket_comments_gateway_1.SocketCommentsGateway],
        exports: [comments_service_1.CommentsService],
        imports: [
            (0, common_1.forwardRef)(() => news_module_1.NewsModule),
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([comments_entity_1.CommentsEntity]),
        ],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map