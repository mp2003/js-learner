
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int salary = sc.nextInt();
        char ch = sc.next().charAt(0);

        double hra = salary * 0.2;
        double da = salary * 0.5;
        double allow = 0.0;
        switch (ch) {
            case 'A':
                allow = 1700;
                break;
            case 'B':
                allow = 1500;
                break;
            default:
                allow = 1300;
                break;
        }

        double pf = salary * 0.11;
        int ans = (int) Math.round((double)salary + hra + da + allow - pf);
        System.out.print(ans);

    }
}
