export class ServiceNotFound extends Error {
  constructor() {
    super('Serviço não encontrado');
    this.name = 'ServiceNotFound';
  }
}
