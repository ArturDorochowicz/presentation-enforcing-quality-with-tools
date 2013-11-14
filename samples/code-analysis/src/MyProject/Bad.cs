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

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Reliability", "CA2000:Dispose objects before losing scope", Justification = "This is only to demonstrate how to suppress a violation. In reality this should be corrected.")]
        public static void Method()
        {
            using (var smtpClient = new SmtpClient { Host = "smtp.gmail.com" })
            {
                smtpClient.Send("from@from.com", "to@to.com", "subject", "body");
            }
        }
    }
}
