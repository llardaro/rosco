//librería propia de definciones de diccionario en inglés
var questions = [
    { letter: "a", answer: "astronauta", status: 0, question: "Comienza con A.\nProfesión a la que muchos niños manifiestan querer dedicarse cuando sean grandes."},
    { letter: "b", answer: "banco", status: 0, question: "Comienza con B.\nEmpresa comercial que realiza operaciones financieras con el dinero procedente de accionistas y clientes."},
    { letter: "c", answer: "cobrar", status: 0, question: "Comienza con C.\nRecibir una cantidad de dinero que se le debe como pago por un servicio o un trabajo realizado."},
    { letter: "d", answer: "diploma", status: 0, question: "Comienza con D.\nDocumento importante en el que se acredita un título, autorizado con sello."},
    { letter: "e", answer: "egresar", status: 0, question: "Comienza con E.\n. Concluir un ciclo de estudios medios o superiores con la obtención del título correspondiente."},
    { letter: "f", answer: "filosofia", status: 0, question: "Comienza con F.\nDisciplina académica que estudia la esencia, las causas primeras y los fines últimos de las cosas."},
    { letter: "g", answer: "aguinaldo", status: 0, question: "Contiene G.\nNombre utilizado para referirse al Sueldo Anual Complementario."},
    { letter: "h", answer: "huelga", status: 0, question: "Comienza con H.\nForma de protesta de los trabajadores con el fin de conseguir mejoras laborales o sociales."},
    { letter: "i", answer: "instagram", status: 0, question: "Comienza con I.\nRed social muy utilizada actualmente por empresas y emprendimientos."},
    { letter: "j", answer: "jirafales", status: 0, question: "Comienza con J.\nApellido del profesor del famoso programa El chavo del 8."},
    { letter: "k", answer: "kiosco", status: 0, question: "Comienza con K.\n Lugar destinado a la venta de ciertos artículos generalmente golosinas."},
    { letter: "l", answer: "licenciatura", status: 0, question: "Comienza con L.\nTítulo académico que se obtiene al acabar una carrera universitaria de más de tres años."},
    { letter: "m", answer: "aumento", status: 0, question: "Contiene M.\n. Incremento del salario esperado por los trabajadores."},
    { letter: "n", answer: "negro", status: 0, question: "Comienza con N.\nForma coloquial de denominar el trabajo irregular o precario."},
    { letter: "o", answer: "contrato", status: 0, question: "Contiene O.\nAcuerdo entre el trabajador y el empleador."},
    { letter: "p", answer: "compañero", status: 0, question: "Contiene P.\nPersona que comparte con otra u otras los estudios, un trabajo u otra actividad."},
    { letter: "q", answer: "arquitectura", status: 0, question: "Contiene Q.\nDisciplina sobre el arte y la técnica de proyectar, diseñar y construir."},
    { letter: "r", answer: "recuperar", status: 0, question: "Comienza con R.\nAprobar una materia o parte de ella después de no haberla aprobado en una convocatoria anterior."},
    { letter: "s", answer: "sindicato", status: 0, question: "Comienza S.\nAsociación de trabajadores cuyo objetivo es la defensa de los intereses profesionales, económicos y laborales de los asociados."},
    { letter: "t", answer: "teletrabajo", status: 0, question: "Comienza con T.\nTrabajo que una persona realiza para una empresa desde su propio domicilio."},
    { letter: "u", answer: "jubilado", status: 0, question: "Contiene U.\nPersona que ha alcanzado la situación de retiro o jubilación."},
    { letter: "v", answer: "viernes", status: 0, question: "Comienza con V.\nDía de la semana en el cual finaliza las clases durante la secundaria."},
    { letter: "w", answer: "window", status: 0, question: "Comienza con W.\n Sistema operativo que posibilita la administración de los recursos de una computadora."},
    { letter: "x", answer: "exposición", status: 0, question: "Contiene X.\n Situación comunicativa que se hace en voz alta ante un auditorio formado por una o varias personas."},
    { letter: "y", answer: "rayada", status: 0, question: "Comienza con Y.\nTipo de hoja de papel con líneas trazadas horizontalmente."},
    { letter: "z", answer: "pizarron", status: 0, question: "Contiene Z.\nSuperficie de escritura reutilizable en la cual los textos y las figuras se dibujan con tiza."},]

var questions2 = [
    { letter: "a", answer: "analitico", status: 0, question: "Comienza con A.\nDocumento que explicita la nómina de materias aprobadas del total de la carrera cursada, con su respectiva nota."},
    { letter: "b", answer: "beca", status: 0, question: "Comienza con B.\nAyuda económica que se concede a una persona para pagar total o parcialmente los gastos que le supone cursar unos estudios."},
    { letter: "c", answer: "bariloche", status: 0, question: "Contiene C.\nCiudad reconocida donde realizan el viaje de egresados los estudiantes del último año de secundaria."},
    { letter: "d", answer: "deuda", status: 0, question: "Comienza D.\nObligación que tiene una persona de pagar o devolver una cosa, generalmente dinero."},
    { letter: "e", answer: "emprender", status: 0, question: "Comienza con E.\nLlevar a la práctica una idea de negocio o empresa."},
    { letter: "f", answer: "final", status: 0, question: "Comienza con F.\ninstancia de evaluación individual en la cual se define la aprobación de la asignatura por el estudiante."},
    { letter: "g", answer: "goma", status: 0, question: "Comienza con G.\nInstrumento de mano cuya finalidad es eliminar trazos generalmente de lápiz."},
    { letter: "h", answer: "historia", status: 0, question: "Comienza con H.\nDisciplina que estudia los sucesos del pasado; generalmente los de la humanidad."},
    { letter: "i", answer: "pupitre", status: 0, question: "Contiene I.\nMesa de escuela que suele tener algún compartimento en el que guardar el material escolar."},
    { letter: "j", answer: "jefe", status: 0, question: "Comienza con J.\n. Persona que tiene autoridad o poder sobre un grupo para dirigir su trabajo o sus actividades."},
    { letter: "k", answer: "marketing", status: 0, question: "Contiene K.\nConjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto."},
    { letter: "l", answer: "laburo", status: 0, question: "Comienza con L.\nTermino coloquial argentino para denominar al trabajo."},
    { letter: "m", answer: "materia", status: 0, question: "Comienza con M.\nForma parte de un programa de estudios."},
    { letter: "n", answer: "ecuacion", status: 0, question: "Contiene N.\nIgualdad entre dos expresiones algebraicas."},
    { letter: "o", answer: "oratoria", status: 0, question: "Comienza con O.\nArte de hablar en público con elocuencia, con la finalidad de persuadir o conmover al auditorio."},
    { letter: "p", answer: "presentismo", status: 0, question: "Comienza con P.\nPremio que recibe el trabajador que no tiene faltas injustificadas."},
    { letter: "q", answer: "liquidación", status: 0, question: "Contiene Q.\nAcción de liquidar."},
    { letter: "r", answer: "renunciar", status: 0, question: "Comienza con R.\nAbandonar voluntariamente el trabajoy."},
    { letter: "s", answer: "sujeto", status: 0, question: "Comienza con S.\nFunción sintáctica que acompaña al predicado."},
    { letter: "t", answer: "transversal", status: 0, question: "Comienza con T.\nTipo de materia con contenidos educativos que no estando ligados a ninguna otra materia en particular."},
    { letter: "u", answer: "UPD", status: 0, question: "Comienza con U.\nFestejo realizado por los estudiantes del último año de secundaria un día antes de comenzar el ciclo lectivo."},
    { letter: "v", answer: "vacaciones", status: 0, question: "Comienza con V.\nSuspensión temporal del trabajo, de los estudios o de otras actividades habituales para descansar."},
    { letter: "w", answer: "software", status: 0, question: "Contiene W.\nConjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas."},
    { letter: "x", answer: "extras", status: 0, question: "Contiene X.\nHoras efectuadas por el trabajador por encima de la jornada legal."},
    { letter: "y", answer: "pyme", status: 0, question: "Contiene Y.\nEmpresa pequeña o mediana."},
    { letter: "z", answer: "indemnización", status: 0, question: "Contiene Z.\nAcción de indemnizar."},]

var questions3 = [
    { letter: "a", answer: "ambo", status: 0, question: "Comienza con A.\nUniforme utilizado para todos los sectores de la salud."},
    { letter: "b", answer: "botanica", status: 0, question: "Comienza con B.\nRama de la biología que estudia las plantas."},
    { letter: "c", answer: "curriculum", status: 0, question: "Comienza con C.\nResumen de los datos personales, formación académica, actividad laboral y méritos de una persona que se solicita para una entrevista laboral."},
    { letter: "d", answer: "desempleado", status: 0, question: "Comienza con D.\nQue está en condiciones de trabajar pero no tiene empleo o lo ha perdido."},
    { letter: "e", answer: "economía", status: 0, question: "Comienza con E.\nCiencia que estudia los recursos, la creación de riqueza y la producción, distribución y consumo de bienes y servicios, para satisfacer las necesidades humanas."},
    { letter: "f", answer: "flauta", status: 0, question: "Comienza con F.\nInstrumento musical de viento más ultilizado en los colegios."},
    { letter: "g", answer: "graduación", status: 0, question: "Comienza con G.\nActo de ceremonia oficial que marca el fin del curso escolar y sirve como reconocimiento a los estudiantes que han completado un plan de estudios, ya sea una licenciatura o un grado, y han obtenido un título académico."},
    { letter: "h", answer: "hipótesis", status: 0, question: "Comienza con H.\nSuposición hecha a partir de unos datos que sirve de base para iniciar una investigación o una argumentación."},
    { letter: "i", answer: "I.V.A", status: 0, question: "Comienza con I.\nSigla del  impuesto que grava el valor añadido o agregado de un producto en las distintas fases de su producción."},
    { letter: "j", answer: "jubilación", status: 0, question: "Comienza con J.\nActo administrativo por el que un trabajador solicita pasar a una situación pasiva o de inactividad laboral tras haber alcanzado la edad legal para ello."},
    { letter: "k", answer: "kennedy", status: 0, question: "Comienza con K.\nPresidente Norteamericano que tuvo participación en la segunda guerra mundial."},
    { letter: "l", answer: "ley", status: 0, question: "Comienza con L.\nRegla o norma establecida por una autoridad superior para regular, de acuerdo con la justicia, algún aspecto de las relaciones sociales."},
    { letter: "m", answer: "monopolio", status: 0, question: "Comienza con M.\nDerecho legal concedido por el Estado a un individuo, grupo o empresa para explotar con carácter exclusivo alguna industria o comercio."},
    { letter: "n", answer: "norma", status: 0, question: "Comienza con N.\nDeterminación de una conducta a seguir."},
    { letter: "o", answer: "sociología", status: 0, question: "Contiene O.\nCiencia que estudia de las sociedades humanas y de los fenómenos religiosos, económicos, artísticos, etc., que ocurren en ellas."},
    { letter: "p", answer: "productivo", status: 0, question: "Comienza con P.\nQue produce o es capaz de producir."},
    { letter: "q", answer: "ñoqui", status: 0, question: "Contiene Q.\nTermino coloquial para denominar a una persona que cobra un sueldo fijo por un trabajo que no realiza ya que es un 'acomodado."},
    { letter: "r", answer: "recreo", status: 0, question: "Comienza con R.\nIntervalo entre clases en los colegios."},
    { letter: "s", answer: "sinópsis", status: 0, question: "Comienza con S.\nResumen muy breve y general de una cosa, especialmente de una novela, película u obra teatral."},
    { letter: "t", answer: "teatro", status: 0, question: "Comienza con T.\nRama de las artes escénicas relacionada con la actuación."},
    { letter: "u", answer: "lengua", status: 0, question: "Contiene U.\nSistema de comunicación verbal y escrito, dotado de convenciones y reglas gramaticales, empleado por las comunidades humanas con fines comunicativos."},
    { letter: "v", answer: "vocación", status: 0, question: "Comienza con V.\nInclinación o interés que una persona siente en su interior para dedicarse a una determinada forma de vida o un determinado trabajo."},
    { letter: "w", answer: "wikipedia", status: 0, question: "Comienza con W.\nEnciclopedia libre y editada de manera colaborativa más  usada por los estudiantes."},
    { letter: "x", answer: "excel", status: 0, question: "Contiene X.\nPrograma informático desarrollado y distribuido por Microsoft que permite realizar tareas contables y financieras."},
    { letter: "y", answer: "adyacente", status: 0, question: "Contiene Y.\nNombre de un triángulo que está muy próximo o unido a otro."},
    { letter: "z", answer: "zoom", status: 0, question: "Comienza con Z.\nServicio de videoconferencia que puede usar para reunirse virtualmente con otras personas muy utilizado en la cuarentena."},]

let randomQuestions = [];

// funciones que eligen una definición entre tres colecciones diferentes y guarda los resultados en un array
function getRandomArray(i, questions_selected) {
  let allQuestions = [questions, questions2, questions3];
  let index = Math.floor(Math.random() * 3);
  return allQuestions[questions_selected][i];
}

function setRandomArray(questions_selected) {
  for(let i = 0; i < 26; i++) {
    randomQuestions.push(getRandomArray(i, questions_selected));
  }
}