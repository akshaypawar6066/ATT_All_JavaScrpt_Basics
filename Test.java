public class Test {
  private int a;
  private String s;
public int getA() {
    return this.a;
}
public void setA(int a) {
    this.a = a;
}
public String getS() {
    return this.s;
}
public void setS(String s) {
    this.s = s;
}

public static void main(String[] args) {
    Test t=new Test();
    t.setA(1);
    t.setS("1");
    System.out.println(t.getA());
    System.out.println(t.getS());
}
 
    }
    

