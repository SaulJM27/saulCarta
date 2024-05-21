class CartaLiberacionServicioSocial {
  constructor() {
    this._epys = document.getElementById('epys');
    this._subjefe = document.getElementById('subjefe');
    this._nombreAlumno = document.getElementById('nombre_alumno');
    this._matricula = document.getElementById('matricula');
    this._carreraAlumno = document.getElementById('carrera_alumno');
    this._institucion = document.getElementById('institucion');
    this._supervisor = document.getElementById('supervisor');
    this._fechaInicio = document.getElementById('fecha_inicio');
    this._fechaFin = document.getElementById('fecha_fin');
    this._fechaExtension = document.getElementById('fecha_extension');
    this._guardarBtn = document.getElementById('guardar');
    this._verLocalStorageBtn = document.getElementById('ver_local_storage');

    this._guardarBtn.addEventListener('click', () => this.guardarEnLaBaseDeDatos());
    this._verLocalStorageBtn.addEventListener('click', () => this.verLocalStorage());
  }

  set epys(value) {
    this._epys.value = value;
  }
  

  get epys() {
    return this._epys.value;
  }

  set subjefe(value) {
    this._subjefe.value = value;
  }

  get subjefe() {
    return this._subjefe.value;
  }

  set nombreAlumno(value) {
    this._nombreAlumno.value = value;
  }

  get nombreAlumno() {
    return this._nombreAlumno.value;
  }

  set matricula(value) {
    this._matricula.value = value;
  }

  get matricula() {
    return this._matricula.value;
  }

  set carreraAlumno(value) {
    this._carreraAlumno.value = value;
  }

  get carreraAlumno() {
    return this._carreraAlumno.value;
  }

  set institucion(value) {
    this._institucion.value = value;
  }

  get institucion() {
    return this._institucion.value;
  }

  set supervisor(value) {
    this._supervisor.value = value;
  }

  get supervisor() {
    return this._supervisor.value;
  }

  set fechaInicio(value) {
    this._fechaInicio.value = value;
  }

  get fechaInicio() {
    return this._fechaInicio.value;
  }

  set fechaFin(value) {
    this._fechaFin.value = value;
  }

  get fechaFin() {
    return this._fechaFin.value;
  }

  set fechaExtension(value) {
    this._fechaExtension.value = value;
  }

  get fechaExtension() {
    return this._fechaExtension.value;
  }
//guarda los datos del formulario en el Local Storage
  guardarEnLaBaseDeDatos() {
    const epysValue = this.epys;
    const subjefeValue = this.subjefe;
    const nombreAlumnoValue = this.nombreAlumno;
    const matriculaValue = this.matricula;
    const carreraAlumnoValue = this.carreraAlumno;
    const institucionValue = this.institucion;
    const supervisorValue = this.supervisor;
    const fechaInicioValue = this.fechaInicio;
    const fechaFinValue = this.fechaFin;
    const fechaExtensionValue = this.fechaExtension;


// campos obligatorios están completos ??????
    if (
      epysValue === '' || subjefeValue === '' || nombreAlumnoValue === '' || matriculaValue === '' ||
      carreraAlumnoValue === '' || institucionValue === '' || supervisorValue === '' ||
      fechaInicioValue === '' || fechaFinValue === '' || fechaExtensionValue === ''
    ) {
      alert('Por favor, complete todos los campos obligatorios antes de guardar la carta.');
    } else {
      // Crear un objeto con los datos a guardar
      const cartaData = {
        epys: epysValue,
        subjefe: subjefeValue,
        nombreAlumno: nombreAlumnoValue,
        matricula: matriculaValue,
        carreraAlumno: carreraAlumnoValue,
        institucion: institucionValue,
        supervisor: supervisorValue,
        fechaInicio: fechaInicioValue,
        fechaFin: fechaFinValue,
        fechaExtension: fechaExtensionValue
      };

      // Convertir el objeto a JSON y almacenarlo en el Local Storage
      localStorage.setItem('carta_liberacion_servicio_social', JSON.stringify(cartaData));

      alert('Información guardada en el Local Storage.');
    }
  }
//metodo para mostrar datos 
  verLocalStorage() {
    const cartaGuardada = localStorage.getItem('carta_liberacion_servicio_social');

    if (cartaGuardada) {
      const carta = JSON.parse(cartaGuardada);
      alert('Información guardada en el Local Storage:\n\n' + JSON.stringify(carta, null, 2));
    } else {
      alert('No hay información guardada en el Local Storage.');
    }
  }
}

// Instanciar la clase cuando se cargue la página
window.addEventListener('load', () => new CartaLiberacionServicioSocial());
