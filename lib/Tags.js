"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTags = void 0;
const exec_1 = require("@actions/exec");
class GitTags {
    tags() {
        return __awaiter(this, void 0, void 0, function* () {
            let outputString = "";
            const options = {
                listeners: {
                    stdout: (data) => outputString += data.toString()
                }
            };
            yield (0, exec_1.exec)('git', ['tag'], options);
            return outputString.split('\n').filter((tag) => tag.length > 0);
        });
    }
}
exports.GitTags = GitTags;
