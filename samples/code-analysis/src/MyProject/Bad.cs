using System.Net.Mail;


namespace MyProject
{
    public static class CodeWithIssues
    {
        public static void Zolusion()
        {
        }

        public static void Projegd()
        {
        }

        public static void Method()
        {
            using (var smtpClient = new SmtpClient { Host = "smtp.gmail.com" })
            {
                smtpClient.Send("from@from.com", "to@to.com", "subject", "body");
            }
        }
    }
}
