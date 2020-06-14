import dayjs from "dayjs";

export class DayJsHelper {
  public static formatDate(
    date: Date,
    format: string = "DD-MM-YYYY HH:mm"
  ): string {
    return dayjs(date).format(format);
  }

  public static parseDate(dateString: string): Date {
    return dayjs(dateString).toDate();
  }
}
