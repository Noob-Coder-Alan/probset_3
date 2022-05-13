#version 330 core

out vec4 FragColor;
uniform float scale;

in vec2 texCoord;

uniform sampler2D texture1;

void main()
{
	FragColor = texture(texture1, texCoord) * vec4(0.77f, 0.42f, 0.56f, 1.0f);
}