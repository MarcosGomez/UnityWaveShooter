#pragma strict

private var mainScene:GameObject;

private var locomotionScript:locomotion_script;

private var anim:Animator;

public static var sprint:boolean = false;

private var speed:float = 1.5;  // meters/second

function Start()
{
    mainScene = GameObject.Find("SceneObject");

    locomotionScript = mainScene.GetComponent(locomotion_script);

    anim = GetComponent(Animator);
}

function Update()
{
    var inX:float = Input.GetAxis("Horizontal");
    var inY:float = Input.GetAxis("Vertical");

    var rot:float = Input.GetAxis("Mouse X");

    if (Input.GetKeyDown(KeyCode.LeftShift))
    {
        sprint = true;
    }
    else if(Input.GetKeyUp(KeyCode.LeftShift)){
    	sprint = false;
    }
    else if (Mathf.Abs(inX) < 0.1 && Mathf.Abs(inY) < 0.1)
    {
        sprint = false;
    }

    if (sprint)
    {
        inX *= 8;
        inY *= 8;
        ScoreManager.score += 1;
    }

    locomotionScript.move(anim, transform, inX, inY, rot, speed);
}