
public class CovertSortListToBST {
    public TreeNode sortedListToBST(ListNode head) {
        return helper(head, null);
    }
    public TreeNode helper(ListNode head, ListNode tail){
        if(head == tail) return null;
        ListNode slow = head, fast = head, pre = head;
        while(fast != tail && fast.next != tail){
            pre = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        TreeNode root = new TreeNode(slow.val);
        root.left = helper(head, slow);
        root.right = helper(slow.next, tail);
        return root;
    }
}
