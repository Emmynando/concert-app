class ConTicket {
  id: number;
  uid: string;
  name: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  images: Record<string, string>;
  guestArtist: Record<string, string>;
  table: Record<string, string>;

  constructor(id: number, conText: string, conArr: Record<string, string>) {
    this.id = id;
    this.uid = conText;
    this.name = conText;
    this.title = conText;
    this.date = conText;
    this.time = conText;
    this.venue = conText;
    this.images = conArr;
    this.guestArtist = conArr;
    this.table = conArr;
  }
}

export default ConTicket;
