using System;
using System.Text.RegularExpressions;

namespace _01
{
    class Program
    {
        /*
        * Match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
        */
        static bool checkString(string s)
        {
            /*
            * Explanation:
            * ^ matches the beginning of a string
            * () creates a group
            * [] single character of the list
            * .* any number of any characters
            * \1 backreference to group #1
            * $ end of the string
            */
            return Regex.IsMatch(s, @"^([aeiou]).*\1$");
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Input the string to be tested:");
            string s = Console.ReadLine();

            Console.WriteLine(checkString(s));
        }
    }
}
