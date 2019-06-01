import {Util} from "./Util";

export class Player {
  /**
   *
   * @param username
   * @param [firstname]
   * @param [lastname]
   * @param [phone]
   * @param [email]
   * @param [discordid]
   * @param [id]
   */
  constructor(username: string, firstname?: string, lastname?: string, phone?: string, email?: string, discordid?: string, id?: number) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.setPhone(phone);
    this.setEmail(email);
    this.setDiscordId(discordid);
    this.id = id;
  };

  public username: string;
  public firstname: string;
  public lastname: string;
  private phone: string;
  private email: string;
  private discordid: string;
  private readonly id: number;

  setPhone(phone) {
    this.phone = Util.validatePhone(phone);
  };

  setEmail(email) {
    this.email = Util.validateEmail(email);
  };

  setDiscordId(discordid) {
    this.discordid = Util.validateDiscordId(discordid);
  };

  getPhone() {
    return this.phone;
  }

  getEmail() {
    return this.email;
  }

  getDiscordId() {
    return this.discordid;
  }
}
