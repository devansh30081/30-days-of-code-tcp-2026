class Solution {
public:
    int sumOfEncryptedInt(vector<int>& nums) {
        int sum = 0;

        for (int x : nums) {
            int temp = x;
            int md = 0;
            int d = 0;

            while (temp > 0) {
                md = max(md, temp % 10);
                temp /= 10;
                d++;
            }

            int enc = 0;
            for (int i = 0; i < d; i++) {
                enc = enc * 10 + md;
            }

            sum += enc;
        }

        return sum;
    }
};
