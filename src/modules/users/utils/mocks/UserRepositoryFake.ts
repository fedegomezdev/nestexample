/* eslint-disable @typescript-eslint/no-empty-function */
export class UserRepositoryFake {
  public async find(): Promise<void> {}
  public async findOne(): Promise<void> {}
  public create(): void {}
  public async save(): Promise<void> {}
  public async remove(): Promise<void> {}
}
