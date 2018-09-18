#pragma strict

private var rotSpeed:float = 200;

// Provide an animator (for notifying about movement) as well as a transform (for applying the movement),
// and provide inX and inZ which are floats ranging from (-2 to 2)
// Currently, for humanoids using the humanoid_animator.controller file, (-1 to 1) in all directions is walking, and (-2 to 2) is running.
// rot is the rotation amount (from the mouse or something) also from (-1 to 1)
function move(animator:Animator, transform:Transform, inX:float, inZ:float, rot:float, speed:float)
{
    animator.SetFloat("vx", inX);
    animator.SetFloat("vz", inZ);

    transform.RotateAround(transform.TransformPoint(Vector3.zero), Vector3.up, rot*rotSpeed*Time.deltaTime);
    transform.Translate(new Vector3(inX*speed*Time.deltaTime, 0, inZ*speed*Time.deltaTime));
}