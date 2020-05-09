/* simple fragment shader
* makes a wave texture
*/

varying vec3 v_xyz_world;
varying vec3 v_xyz_local;

void main()
{
   gl_FragColor = vec4(cos(v_xyz_world.x - v_xyz_world.z),
                        v_xyz_world.y * 3.141,
                        1,2);
}
