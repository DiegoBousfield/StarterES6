import ClasseUsuario, { idade as IdadeUsuario} from './mod2/function';
import { umPorSegundo } from './mod3/exerc1';
import { getUserFromGithub } from './mod3/exerc2';
import Github from './mod3/exerc3';

/*umPorSegundo();
getUserFromGithub('DiegoBousfield');
getUserFromGithub('DiegoBousfield2');
ClasseUsuario.info();*/
Github.getRepositories('DiegoBousfield/learningwebpack');
Github.getRepositories('rocketseat/asldçkfjads');
console.log(IdadeUsuario);