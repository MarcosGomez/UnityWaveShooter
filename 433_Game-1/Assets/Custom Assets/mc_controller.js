#pragma strict

var speed:float = 0.3;

function Start () 
{
	
}

function Update () 
{	
	var input_vert:float = Input.GetAxis("Vertical");
	var input_horiz:float = Input.GetAxis("Horizontal");

	var forward:Vector3 = transform.TransformDirection(Vector3.forward);
	var right:Vector3 = transform.TransformDirection(Vector3.right);
	var current_speed_y:float = speed * input_vert;
	var current_speed_x:float = speed * input_horiz;
	
	transform.Translate(forward * current_speed_y);
	transform.Translate(right * current_speed_x);
	
	var anim:Animator = GetComponent.<Animator>();
	anim.SetFloat("speed", input_vert);
}

@script RequireComponent(CharacterController)