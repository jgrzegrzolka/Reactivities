using System;
using System.Diagnostics.CodeAnalysis;

namespace Domain
{
    public class NullableTest
    {
        public static void  test()
        {
            string? text = MaybeNull();
            CheckIfNull(text);   

            Console.WriteLine(text.Length);
        }

        static T CheckIfNull<T>([NotNull] T? input) where T : class => input ?? throw new ArgumentNullException();

        static bool StringIsNullOrEmpty([NotNullWhen(false)] string? text) => string.IsNullOrEmpty(text);

        static string? MaybeNull() => DateTime.UtcNow.Second == 0 ? null : "not null";
    }
}
