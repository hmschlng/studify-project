package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.api.request.study.StudyInfoUpdatePutReq;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 스터디 모델 정의
 */
@NoArgsConstructor
@Getter
@Setter
@Table(name = "study")
@Entity
public class Study extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "study_id")
    private Long id;

    @Column(nullable = false)
    private String title; // 스터디 제목

    @Column(columnDefinition = "LONGTEXT")
    private String description; // 스터디 설명

    @Column(nullable = false)
    private Integer headcount; // 참여자 수

    @Column(nullable = false)
    private Integer capacity; // 정원

    @ElementCollection
    @CollectionTable(name = "study_day", joinColumns = @JoinColumn(name = "study_id"))
    private List<String> day = new ArrayList<>(); // 요일

    @OneToMany(mappedBy = "study")
    private List<Category> category = new ArrayList<>(); // 카테고리

    @Column(nullable = false)
    private Boolean isPublic; // 공개 여부

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private Integer generation; // 기수

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private String region; // 지역

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    private Integer classNum; // 반

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "study")
    private List<UserStudy> users = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "study_img_id", referencedColumnName = "study_img_id")
    private StudyImg studyImg;

    @Builder
    public Study(String title, String description, Integer capacity, List<String> day,
                 boolean isPublic, Integer generation, String region, Integer classNum) {
        this.title = title;
        this.description = description;
        this.headcount = 1;
        this.capacity = capacity;
        this.day = day;
        this.isPublic = isPublic;
        this.generation = generation;
        this.region = region;
        this.classNum = classNum;
    }

    /**
     * 스터디 정보 변경
     */
    public void changeInfo(StudyInfoUpdatePutReq studyInfoUpdatePutReq) {
        this.title = studyInfoUpdatePutReq.getTitle();
        this.description = studyInfoUpdatePutReq.getDescription();
        this.capacity = studyInfoUpdatePutReq.getCapacity();
        this.day = studyInfoUpdatePutReq.getDay();
        this.isPublic = studyInfoUpdatePutReq.getIsPublic();
    }

    /**
     * 참여자 수 증가
     */
    public void increaseHeadcount() {
        this.headcount += 1;
    }

    /**
     * 참여자 수 감소
     */
    public void decreaseHeadcount() {
        this.headcount -= 1;
    }

}
