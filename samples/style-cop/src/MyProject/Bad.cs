namespace MyProject
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.OrderingRules", "SA1202:ElementsMustBeOrderedByAccess", Justification = "This is to demonstrate usage of suppression in StyleCop.")]
    public class Bad
    {
        static void PrivateBeforePublic()
        {
        }

        public static void Public()
        {
        }
    }
}
