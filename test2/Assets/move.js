#pragma strict

function Start () {

}

function Update () {

transform.rotation *= Quaternion.AngleAxis(Input.GetAxis("Horizontal")*30*Time.deltaTime,Vector3(0,0,1));
transform.rotation *= Quaternion.AngleAxis(Input.GetAxis("Vertical")*30*Time.deltaTime,Vector3(1,0,0));


}