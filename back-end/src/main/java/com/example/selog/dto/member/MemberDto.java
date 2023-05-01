package com.example.selog.dto.member;

import com.example.selog.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberDto {
    private Long userId;
    private String nickname;
    private String img;
    private String email;

    // 목표 설정
    private String bojTarget;
    private String blogTarget;
    private String feedTarget;
    private String csTarget;

    //주소
    private String velog;
    private String baekjoon;
    private String tistory;
    private String github;

    private String motto;
    private Integer characterId;
    private String tel;
    private String contact;


    public static MemberDto of(Member member) {
        return MemberDto.builder()
                .userId(member.getUserId()).nickname(member.getNickname()).img(member.getImg()).email(member.getEmail())
                .bojTarget(member.getBojTarget()).blogTarget(member.getBlogTarget()).feedTarget(member.getFeedTarget()).csTarget(member.getCsTarget())
                .velog(member.getVelog()).tistory(member.getTistory()).github(member.getGithub())
                .motto(member.getMotto()).characterId(member.getCharacterId()).tel(member.getTel()).contact(member.getContact())
                .build();
    }
}